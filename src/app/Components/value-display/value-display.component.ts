import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'value-display',
  templateUrl: './value-display.component.html',
  styleUrls: ['./value-display.component.css']
})
export class ValueDisplayComponent implements OnInit {

  constructor() { }

  @Input()
  header!: String
  @Input()
  value!: any

  ngOnInit(): void {
  }

}
