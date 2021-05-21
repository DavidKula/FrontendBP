import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { GroupService } from './group.service';
import { HttpClient, HttpClientModule, HttpRequest } from '@angular/common/http';
import { OauthService } from '../oauth-service/oauth.service';

describe('GroupService', () => {
  let service: GroupService;
  let oauthService: OauthService
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {providers: [GroupService, OauthService], imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(GroupService);
    httpTestingController = TestBed.inject(HttpTestingController);
    oauthService = TestBed.inject(OauthService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send group data request to the right url', () => {

    const testData = {
      groupScoreAvg: 0,
      successProbability: false,
      players: []
    }

    const input = {
      groupCode: "Listery-Drak'thul,Listery-Drak'thul,Listery-Drak'thul,Listery-Drak'thul,Listery-Drak'thul",
      dungeonCode: "DOS",
      difficulty: 10
    }

    service.getGroupData(input).subscribe(response => {
      expect(response).toBe(testData)
    })

    const request = httpTestingController.expectOne(
      (req: HttpRequest<any>) => {
        return req.url.includes('https://key-stone-pro.herokuapp.com/prediction')
      });
  
    request.flush(testData);
    httpTestingController.verify();
  });

});
