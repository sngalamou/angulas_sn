import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-french',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.css']
})
export class FrenchComponent implements OnInit {

  word: string = "";
  trans: string = "";

  constructor() { }

  ngOnInit() {
  }

  initApplication() {
    this.word = "Hello";
    this.trans = "Bonjour";
  }

}
