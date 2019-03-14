import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knew',
  templateUrl: './knew.component.html',
  styleUrls: ['./knew.component.css'],
  inputs: [`parentData`]
})
export class KnewComponent implements OnInit {

  public parentData:String;
  constructor() { }

  ngOnInit() {
  }

}
