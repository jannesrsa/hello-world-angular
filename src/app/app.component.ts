import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  engine = "fast";

  constructor() {
  }

  ngOnInit() {
  }

  start() {
    alert('Engine started: ' + this.engine);
  }

  stop() {
    alert('Engine stopped: ' + this.engine);
  }
}
