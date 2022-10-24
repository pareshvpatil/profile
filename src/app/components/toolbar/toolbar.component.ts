import {AfterContentChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import Util from "../../common/util";
import {MatButton} from "@angular/material";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigate = Util.navigate;

  checkActive(location: string, button: MatButton) {
    if (window.location.pathname === location) {
      console.log('came to: ' + location);
      button._elementRef.nativeElement.style.fontWeight = 'bolder';
    } else {
      button._elementRef.nativeElement.style.fontWeight = 'normal';
    }
  }
}
