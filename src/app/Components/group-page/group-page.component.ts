import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Group } from 'src/app/Models/group.model';
import { Player } from 'src/app/Models/player.model';
import { GroupService } from 'src/app/Services/group-service/group.service';
import { OauthService } from 'src/app/Services/oauth-service/oauth.service';
import { Utils } from 'src/app/Utils/utils';

@Component({
  selector: 'group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {

  groupCode = new FormControl("")
  dungeonCode = new FormControl("HOA")
  dungeonDifficulty = new FormControl(2)
  region = new FormControl("eu")

  loading = false
  groupData: Group | undefined = undefined
  groupImages: any[] = []

  dungeonTypes = [
    "HOA",
    "PF",
    "SD",
    "SOA",
    "MOTS",
    "NW",
    "DOS",
    "TOP"
  ]

  constructor(private groupService: GroupService, private oauthService: OauthService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  async onCalculateClick() {

    this.groupData = undefined

    if(!this.checkInputValidity(this.groupCode.value)) {
      return
    }

    this.loading = true
    const apiKey = await this.oauthService.getOauthToken()

    this.groupImages = []
    this.groupService.getGroupData({groupCode: this.groupCode.value, dungeonCode: this.dungeonCode.value, difficulty: this.dungeonDifficulty.value})
    .pipe(catchError(this.handleHttpErrorsFromBackend))
    .subscribe( val => {

      let response = val as unknown as any[]

      const group = this.convertToGroup(response[0])

      group.players.forEach( (player: Player) => {
        this.groupService.getPlayerImagesAndIlvl(player.playerName, this.region.value, apiKey)
        .pipe(catchError(this.handleHttpErrorsFromBlizzard))
        .subscribe(value => {
          player.image = value.image
          player.itemLevel = value.itemLevel
          player.playerName = value.playerName
        })
      })

      this.loading = false
      this.groupData = group;
    })
  }

  convertToGroup(val: any) {
    console.log(val)

    if(val === "Not found") return {
      groupScoreAvg: 0,
      successProbability: false,
      players: [{playerName: "Not-found", image: "", itemLevel: 0, score: -1}]
    }

    const ret : Group = {
      groupScoreAvg: (val.p1.score + val.p2.score + val.p3.score + val.p4.score + val.p5.score)/5,
      successProbability: val.prediction,
      players: []
    }

    ret.players.push({playerName: val.p1.name, image: "", itemLevel: 0, score: val.p1.score})
    ret.players.push({playerName: val.p2.name, image: "", itemLevel: 0, score: val.p2.score})
    ret.players.push({playerName: val.p3.name, image: "", itemLevel: 0, score: val.p3.score})
    ret.players.push({playerName: val.p4.name, image: "", itemLevel: 0, score: val.p4.score})
    ret.players.push({playerName: val.p5.name, image: "", itemLevel: 0, score: val.p5.score})

    return ret
  }


  handleHttpErrorsFromBackend = (error: HttpErrorResponse) => {
    this.loading = false

    console.log(error)
    this.displayErrorMessage("Player is not in KeystonePro database")

    return of(["Not found"])
  }

  handleHttpErrorsFromBlizzard = (error: HttpErrorResponse) => {
    this.loading = false

    this.displayErrorMessage("Player not found!")

    return of(
      {
        itemLevel: 0,
        image: "https://www.melbourne.lib.ia.us/images/question-mark-light/image",
        playerName: "Not found"
      }
    )
  }

  checkInputValidity(input: string) : boolean {

    if(!input) {
      this.displayErrorMessage("Please enter input you want to search for!")
      return false
    }

    const characters = input.split(",")

    if(characters.length < 5) {
      this.displayErrorMessage("Enter 5 player-characters please!")
      return false
    }

    for (const char of characters) {
      if(!char.split("-")[1]) {
        this.displayErrorMessage("Please enter realm name!")
        return false
      }
    }
    return true
  }

  private displayErrorMessage(message: string) {
    this.snackBar.open(message, "Ok", {
      duration: 4000,
    });
  }

}
