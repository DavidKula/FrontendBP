import { Overlay } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerService } from 'src/app/Services/player-service/player.service';
import { RegionPickerComponent } from '../region-picker/region-picker.component';

import { PlayerPageComponent } from './player-page.component';

describe('PlayerPageComponent', () => {
  let component: PlayerPageComponent;
  let fixture: ComponentFixture<PlayerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerPageComponent, RegionPickerComponent ],
      providers: [PlayerService, MatSnackBar, Overlay],
      imports: [
        HttpClientTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
