import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-training',
  templateUrl: './javascript-training.component.html',
  styleUrls: ['./javascript-training.component.css']
})
export class JavascriptTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pressButton(): void {
    let a: number;
    let b: number;
    let c: number;

    a = 5;
    b = 6;
    c = a + b;

    document.getElementById('demo').innerHTML = c.toString();
  }

  mousyover() {
    document.getElementById('demo').style.color = 'black';
  }

  mousyleave() {

    if (document.getElementById('demo').style.color === 'blue') {
      document.getElementById('demo').style.color = 'red';
    } else {
      document.getElementById('demo').style.color = 'blue';
    }
  }
}
