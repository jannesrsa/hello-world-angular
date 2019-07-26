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

}

function test() {
  document.getElementById("demo").style.display = "block";
}
