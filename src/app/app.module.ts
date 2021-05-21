import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupPageComponent } from './Components/group-page/group-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupComponentComponent } from './Components/group-component/group-component.component';
import { HttpClientModule } from '@angular/common/http';
import { RegionPickerComponent } from './Components/region-picker/region-picker.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { PlayerCardComponent } from './Components/player-card/player-card.component';
import { PlayerPageComponent } from './Components/player-page/player-page.component';
import { ValueDisplayComponent } from './Components/value-display/value-display.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingDisplayComponent } from './Components/loading-display/loading-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomePageComponent,
    GroupPageComponent,
    GroupComponentComponent,
    RegionPickerComponent,
    PlayerCardComponent,
    PlayerPageComponent,
    ValueDisplayComponent,
    LoadingDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
