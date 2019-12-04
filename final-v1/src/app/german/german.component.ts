import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-german',
  templateUrl: './german.component.html',
  styleUrls: ['./german.component.css']
})
export class GermanComponent implements OnInit {

  word: string = "";
  trans: string = "";

  constructor() { }

  ngOnInit() {
  }

  initApplication() {
    this.word = "Hello";
    this.trans = "Hallo";
  }

}
