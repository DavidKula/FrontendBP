import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient, } from '@angular/common/http';
import { BlizzMedia } from 'src/app/Models/blizzard-response-media.model';
import { Player } from 'src/app/Models/player.model';
import { Utils } from 'src/app/Utils/utils';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) { }

  getPlayerData(groupInput: String, region: String, apiKey: String) : Observable<Player> {

    const charName = groupInput.split("-")[0].toLowerCase()
    const realm = groupInput.split("-")[1].toLowerCase().replace("'", "")

    const scoreAddress = "https://key-stone-pro.herokuapp.com/playerscore/" + groupInput + "/"

    const mediaAddress = "https://" + region + ".api.blizzard.com/profile/wow/character/" + realm + "/" + charName +
     "/character-media?namespace=profile-" + region +
     "&locale=en_GB&access_token=" + apiKey

    const itemsAddress = "https://" + region + ".api.blizzard.com/profile/wow/character/" + realm + "/" + charName +
    "/equipment?namespace=profile-" + region +
    "&locale=en_GB&access_token=" + apiKey

    const $itemsObservable = this.httpClient.get(itemsAddress)
    const $mediaObservable = this.httpClient.get(mediaAddress) as Observable<BlizzMedia>
    
    const $blizzardDataObs = $mediaObservable.pipe(
      mergeMap( blizzMedia => {
        console.log(blizzMedia)
        return $itemsObservable.pipe(
          map( items => {
            return {items: (items as {equipped_items: any}).equipped_items, media: blizzMedia}
          })
        ) 
      })
    )
    const $playerScore = this.httpClient.get(scoreAddress)

    return $blizzardDataObs.pipe(
        mergeMap( blizzData => {
            return $playerScore.pipe(map(
                scoreObj => {
                    return {
                        playerName: blizzData.media.character.name + "-" + blizzData.media.character.realm.name,
                        score: (scoreObj as {score: number}).score,
                        image: (blizzData.media as BlizzMedia).assets[0].value,
                        itemLevel: Utils.getItemLevelFromBlizzardItems(blizzData.items)
                    }
                }   
            ))
        }),
      )
  }

}
