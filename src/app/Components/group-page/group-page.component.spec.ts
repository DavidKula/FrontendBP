import { Overlay } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { forwardRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OauthService } from 'src/app/Services/oauth-service/oauth.service';
import { RegionPickerComponent } from '../region-picker/region-picker.component';
import { ValueDisplayComponent } from '../value-display/value-display.component';
import { GroupPageComponent } from './group-page.component';

describe('GroupPageComponent', () => {
  let component: GroupPageComponent;
  let fixture: ComponentFixture<GroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPageComponent, RegionPickerComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
        MatSelectModule
      ],
      providers: [OauthService, MatSnackBar, Overlay,
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => ValueDisplayComponent),
          multi: true
        }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
