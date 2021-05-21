import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Player } from 'src/app/Models/player.model';
import { OauthService } from 'src/app/Services/oauth-service/oauth.service';
import { PlayerService } from 'src/app/Services/player-service/player.service';
import { Utils } from 'src/app/Utils/utils';

@Component({
  selector: 'player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  @Input()
  player: Player | undefined = undefined
  playerName = new FormControl("")
  region = new FormControl("eu")
  loading = false

  constructor(private playerService: PlayerService, private oauthService: OauthService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  async onFindClick() {

    this.player = undefined

    if(!this.checkInputValidity(this.playerName.value)) {
      return
    }

    this.loading = true
    const apiKey = await this.oauthService.getOauthToken()

    this.playerService.getPlayerData(this.playerName.value, this.region.value, apiKey)
    .pipe(catchError(this.handleHttpErrors))
    .subscribe(playerData => {
      this.player = playerData
      this.loading = false
    })
  }

  checkInputValidity(input: string) : boolean {

    if(!input) {
      this.displayErrorMessage("Please enter input you want to search for!")
      return false
    }

    if(!input.split("-")[1]) {
      this.displayErrorMessage("Please enter realm name!")
      return false
    }

    return true
  }

  handleHttpErrors = (error: HttpErrorResponse) => {

    this.loading = false

    if(error.url?.includes(".api.blizzard.com") ) {
      this.displayErrorMessage("Error 404 - player not found!")
    } else {
      this.displayErrorMessage("Player is not in KeystonePro database")
    }
    return of(
      {
        score: -1,
        itemLevel: 0,
        image: "https://www.melbourne.lib.ia.us/images/question-mark-light/image",
        playerName: "Not found"
      }
    )
  }

    
  private displayErrorMessage(message: string) {
    this.snackBar.open(message, "Ok", {
      duration: 4000,
    });
  }
  
}
