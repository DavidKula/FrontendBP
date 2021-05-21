import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Group } from 'src/app/Models/group.model';
import { BlizzMedia } from 'src/app/Models/blizzard-response-media.model';
import { Utils } from 'src/app/Utils/utils';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpClient: HttpClient) { }

  getGroupData(groupInput: {groupCode: string, dungeonCode: string, difficulty: number}) : Observable<Group> {

    const characters = groupInput.groupCode.split(",")

    const params = new HttpParams()
      .set("p1", characters[0])
      .set("p2", characters[1])
      .set("p3", characters[2])
      .set("p4", characters[3])
      .set("p5", characters[4])
      .set("diff", groupInput.difficulty.toString())
      .set("dung", groupInput.dungeonCode)

    return this.httpClient.get("https://key-stone-pro.herokuapp.com/prediction/", { params: params}) as Observable<Group>
  }

  getPlayerImagesAndIlvl(playerName: String, region: String, apiKey: String) {

    console.log(playerName)

    const charName = playerName.split("-")[0].toLowerCase()
    const realm = playerName.split("-")[1].toLowerCase().replace("'", "")

    const mediaAddress = "https://" + region + ".api.blizzard.com/profile/wow/character/" + realm + "/" + charName +
     "/character-media?namespace=profile-" + region +
     "&locale=en_GB&access_token=" + apiKey

    const itemsAddress = "https://" + region + ".api.blizzard.com/profile/wow/character/" + realm + "/" + charName +
    "/equipment?namespace=profile-" + region +
    "&locale=en_GB&access_token=" + apiKey

    const $itemsObservable = this.httpClient.get(itemsAddress)
    const $mediaObservable = this.httpClient.get(mediaAddress) as Observable<BlizzMedia>
    
    return $mediaObservable.pipe(
      mergeMap( blizzMedia => {
        return $itemsObservable.pipe(
          map( items => {
            return {
              itemLevel: Utils.getItemLevelFromBlizzardItems((items as {equipped_items: any}).equipped_items),
              image: blizzMedia.assets[0].value,
              playerName: blizzMedia.character.name + "-" + blizzMedia.character.realm.name}
          })
        ) 
      })
    )
  }

}
