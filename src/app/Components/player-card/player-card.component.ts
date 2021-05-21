import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/Models/player.model';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input()
  player!: Player;

  constructor() { }

  ngOnInit(): void {

  }

}
