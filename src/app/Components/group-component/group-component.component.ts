import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/Models/group.model';

@Component({
  selector: 'group-component',
  templateUrl: './group-component.component.html',
  styleUrls: ['./group-component.component.css']
})
export class GroupComponentComponent implements OnInit {

  @Input()
  groupData: Group | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
