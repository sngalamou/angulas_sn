import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  word: string = "";
  trans: string = "";

  constructor() { }

  ngOnInit() {
  }

  initApplication() {
    this.word = "Hello";
    this.trans = "Hola";
  }

}
