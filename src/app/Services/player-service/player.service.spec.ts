import { HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OauthService } from '../oauth-service/oauth.service';

import { PlayerService } from './player.service';

describe('GroupService', () => {
  let service: PlayerService
  let httpTestingController: HttpTestingController
  

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [PlayerService, OauthService], imports: [HttpClientTestingModule]
      }
    );    

    service = TestBed.inject(PlayerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
