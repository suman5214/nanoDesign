import { Component, AfterContentInit, OnInit, ViewEncapsulation } from '@angular/core';
import { slideInAnimation } from './animation';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'nanoDesign';
  constructor( private translate: TranslateService) {
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngOnInit(): void {
    const height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    window.resizeTo(width, height);
    console.log(width, height);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
