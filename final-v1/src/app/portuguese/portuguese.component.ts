import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portuguese',
  templateUrl: './portuguese.component.html',
  styleUrls: ['./portuguese.component.css']
})
export class PortugueseComponent implements OnInit {

  word: string = "";
  trans: string = "";

  constructor() { }

  ngOnInit() {
  }

  initApplication() {
    this.word = "Hello";
    this.trans = "Olá";
  }

}
