import { Overlay } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupPageComponent } from '../group-page/group-page.component';
import { PlayerPageComponent } from '../player-page/player-page.component';
import { RegionPickerComponent } from '../region-picker/region-picker.component';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MatSnackBar, Overlay],
      declarations: [ GroupPageComponent, HomePageComponent, PlayerPageComponent, RegionPickerComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatSelectModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
