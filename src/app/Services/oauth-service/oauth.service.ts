import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CLIENT_ID, CLIENT_SECRET } from 'src/app/Constants/constants';
import { OauthToken } from 'src/app/Models/oauth-token.model';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(private httpClient: HttpClient) { }

  private oauthToken: OauthToken = {
    access_token: "",
    token_type: "",
    expires_in: 0,
    scope: ""
  }
  private expirationDate: Date = new Date() 

  async getOauthToken() : Promise<String> {

    if(new Date() < this.expirationDate && this.oauthToken) {
      return this.oauthToken.access_token
    }

    const postUrl = "https://eu.battle.net/oauth/token"
    const headers = new HttpHeaders().set("cache-control", "no-cache").set("content-type", "localhost:4200")
    const params = new HttpParams()
        .set("redirect_uri", "localhost:4200")
        .set("grant_type", "client_credentials")
        .set("client_id", CLIENT_ID)
        .set("client_secret", CLIENT_SECRET)

    const options = {
      headers: headers,
      params: params
    }

    this.oauthToken = await this.httpClient.post(postUrl, "", options).toPromise() as OauthToken

    console.log(this.oauthToken)
    this.expirationDate = new Date()
    this.expirationDate = new Date(this.expirationDate.getTime() + this.oauthToken.expires_in * 1000);
    return this.oauthToken.access_token
  }


}
