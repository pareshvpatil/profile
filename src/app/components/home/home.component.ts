import { Component, OnInit } from '@angular/core';
import Util from "../../common/util";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  scrollToNextFold(target: HTMLElement) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
