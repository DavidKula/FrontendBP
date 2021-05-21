import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValueDisplayComponent } from '../value-display/value-display.component';

import { PlayerCardComponent } from './player-card.component';

describe('PlayerCardComponent', () => {
  let component: PlayerCardComponent;
  let fixture: ComponentFixture<PlayerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCardComponent, ValueDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardComponent);
    component = fixture.componentInstance;
    component.player = {
      playerName: "TestPlayer-Kekthul",
      score: 0,
      itemLevel: 220,
      image: ""
    } 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});