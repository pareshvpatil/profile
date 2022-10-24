import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email: string = '';
  name: string = '';
  mobile: number;
  message: string = '';
  mailSent: boolean;
  clicked: boolean;

  constructor() { }

  ngOnInit() {
    this.mailSent = false;
    this.clicked = false;
  }

  getRowHeight() {
    return '345px';
  }

  sendMailWithMessage() {
    this.clicked = true;
    setTimeout(this.mailSent = true, 1000);
    this.clicked = false;
  }

  openMailClient() {
    window.location.href = 'mailto:paresh.patil1305@gmail.com';
  }

  openGithubProfile() {
    window.open('https://github.com/pareshvpatil');
  }

  openLinkedInProfile() {
    window.open('https://www.linkedin.com/in/paresh-v-patil/');
  }
}
