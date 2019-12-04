import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-italian',
  templateUrl: './italian.component.html',
  styleUrls: ['./italian.component.css']
})
export class ItalianComponent implements OnInit {

  word: string = "";
  trans: string = "";

  constructor() { }

  ngOnInit() {
  }

  initApplication() {
    this.word = "Hello";
    this.trans = "Ciao";
  }

}
