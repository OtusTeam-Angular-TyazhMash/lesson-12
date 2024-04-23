import { Component } from '@angular/core';
import {Singleton} from "../Singleton";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson-12';

  singleton: Singleton = Singleton.getInstance();
  Singleton = Singleton;
}
