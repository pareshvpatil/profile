import { Component, OnInit } from '@angular/core';

declare type SocialLinks = 'github' | 'linkedin' | 'twitter' | 'gmail' | 'whatsapp';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigateTo(location: SocialLinks) {
    switch (location) {
      case "github":
        window.open("https://www.github.com/pareshvpatil")
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/paresh-v-patil")
        break;
      case "twitter":
        window.open("https://www.twitter.com/deftlad")
        break;
      case "gmail":
        window.open("mailto:com.deftlad@gmail.com")
        break;
      case "whatsapp":
        window.open("https://wa.me/918087497099")
        break;
    }
  }
}
