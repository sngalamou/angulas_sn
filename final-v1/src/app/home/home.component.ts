import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  word: string = "";
  trans: string = "";
  cors: string = "https://cors-anywhere.herokuapp.com/";
  

  constructor() { }

  ngOnInit() {

  }


  initApplication(word,trans) {
    var link2: string = "https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=en&to=es&text=";
    var link1: string = this.cors + "https://www.dictionary.com/e/word-of-the-day/";
    var indexRequest = new XMLHttpRequest();
    indexRequest.open('GET', link1);
    indexRequest.onload = function() {
        var res: string[] = (indexRequest.responseText).split(" ", 200);
        console.log(res[179]);
        word = res[179];
        console.log(word);

        link2 += word;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open("GET", link2 );
        xhr.setRequestHeader("x-rapidapi-host", "microsoft-azure-translation-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "0d8ce3de65mshafcf99926226a2cp1f78e5jsn5f88341225c9");
        xhr.setRequestHeader("accept", "application/json");

        
        xhr.onload = function () {
                console.log("Done");
                console.log(this.responseText);
                trans = this.responseText;
        }
    }
    indexRequest.send();
  }
}
