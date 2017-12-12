import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
   }

  info = "Avitronics International AB was started in 1994. The company has since then developed into a successful aviation electronics trading company, with markets in the Nordic countries, Eastern Europe, Russia, India and South East Asia. Avitronics is situated in Stockholm, Sweden.";
  ngOnInit() {
  }

}
