import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  inputs: [`parentData`],
})

export class HelloComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  public month: String;
  @Input() public parentData: any;
  @Output() public childEvent = new EventEmitter();

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.month = paramsId.month;
    });
  }
  fireEvent(){
    this.childEvent.emit("Hey Parent");
  }

}
