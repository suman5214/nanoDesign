import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import * as Rellax from 'Rellax';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import {FormControl} from '@angular/forms';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { debounceTime } from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

import { interval as observableInterval } from 'rxjs';
import { takeWhile, scan, tap } from 'rxjs/operators';
import { ApiServiceService } from './api-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-20px)',  opacity: 0}),
          animate('0.5s 0.7s ease-in', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    ),
    trigger(
      'loadAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-20px)',  opacity: 0}),
          animate('0.5s 0.7s ease-in', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    )
  ],
  providers: [ApiServiceService]
})
export class HomePageComponent implements OnInit {
  @ViewChild('fullpageRef') fp_directive: ElementRef;
  config;
  fullpage_api;
  disableMenu: any = false;
  visible = false;
  searchField = new FormControl();
  orginalList: string[] = [];
  gameList: string[];
  selectedList: string[];
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  public swipperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  result = { 'cpu' : '', 'gpu': '', 'mem': ''};
  loading = false;
  constructor(private router: Router, private translate: TranslateService,
    private apiService: ApiServiceService) {
    this.config = {
      licenseKey: '0FB20392-42234774-8832938C-619D0B0A',
       anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
       menu: '#menu',
      navigation: true,
      onLeave: (origin, destination, direction) => {

          this.disableMenu = false;
      },
      // events callback
      afterLoad: (origin, destination, direction) => {
        // console.log(origin, destination, direction);
        if (destination.anchor === 'firstPage') {
          this.disableMenu = true;
        }
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width, height) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
         console.log(section, origin, destination, direction);
      }
    };
  }

  ngOnInit() {
    this.apiService.getGames().subscribe( (data: any) => {
      console.log(data.name);
      this.orginalList = data.name;
      this.gameList = this.orginalList;
    });
    this.selectedList = [];
    // this.gameList = this.orginalList;
    this.searchField.valueChanges
      .pipe(debounceTime(500))
      .subscribe(term => {
        console.log(term);
        if (term === '') {
          this.gameList = this.orginalList;
        }
        this.gameList = this.orginalList.filter( game => {
          return game.includes(term);
        });
        // this.directiveRef.update();
      });
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  handleSelect(type: string) {
    this.router.navigate(['/select', {type: type}]);
  }
  pillSelect(event) {
    if (this.selectedList.includes(event)) {
      this.selectedList = this.selectedList.filter(item => {
        return item !== event;
      });
    } else {
    this.selectedList.push(event);
    }
  }
  changeLanguage() {
    if (this.translate.currentLang === 'en') {
      this.translate.use('cn');
    } else {
    this.translate.use('en');
    }
  }
  removeLast() {
    const lastSection = this.fp_directive.nativeElement.lastChild;

    if (lastSection.isEqualNode(this.fullpage_api.getActiveSection().item)) {
      this.fullpage_api.moveSectionUp();
    }
    lastSection.remove();

    this.fullpage_api.build();
  }

  randomColor() {
    return '#' + Math.random().toString(16).slice(-3);
  }

nextPage() {
  this.fullpage_api.moveSectionDown();
}

convertRemToPixels(rem: number): number {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

  scrollToTop(el) {
  el.scrollTop = el.scrollTop + this.convertRemToPixels(15);
  }
  scrollToBot(el) {
    el.scrollTop = el.scrollTop - this.convertRemToPixels(15);
  }

  getResult() {
    this.loading = true;
    console.log(this.selectedList);

    this.apiService.postGames(this.selectedList).toPromise().then( res => {
      console.log(res);

    Object.keys(res).forEach(key => {
        this.result[key] = res[key][0];
      }
    );
    console.log(this.result);
    this.loading = false;
    }).catch (err => {
      console.log(err);
    });
  }
}
