import { Component, OnInit, ElementRef, ViewChild, HostListener, AfterViewChecked} from '@angular/core';
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
import { ChangeDetectorRef } from '@angular/core';


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
export class HomePageComponent implements OnInit, AfterViewChecked {
  @ViewChild('fullpageRef') fp_directive: ElementRef;
  config;
  fullpage_api;
  disableMenu: any = false;
  disableLoading = true;
  visible = false;
  searchField = new FormControl();
  orginalGameList: any = [];
  gameList: any;
  orginalWorkList: any = [];
  workList: any;
  selectedList: any;
  switchStatus = 'game';
  screenWidth: number;
  lastSection = false;
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

  result = { 'cpu' : '', 'gpu': '', 'mem': '', 'price': null, 'psu': []};
  loading = 'init';
  mobile: boolean;
  constructor(private router: Router, private translate: TranslateService,
    private apiService: ApiServiceService, private cdf: ChangeDetectorRef) {
    this.config = {
      licenseKey: '0FB20392-42234774-8832938C-619D0B0A',
       anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
       menu: '#menu',
      navigation: true,
      onLeave: (origin, destination, direction) => {
          this.disableMenu = false;
          if (destination.anchor === 'fourthPage') {
            this.disableLoading = false;
          } else {
            this.disableLoading = true;
          }
      },
      // events callback
      afterLoad: (origin, destination, direction) => {
        // console.log(origin, destination, direction);
        if (destination.anchor === 'firstPage') {
          this.disableMenu = true;
        }
        // if (destination.anchor === 'fourthPage' && this.mobile) {
        //   this.fullpage_api.setAutoScrolling(false);
        // }
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
    this.screenWidth = window.innerWidth;
    this.mobile = this.screenWidth <= 500 ? true : false;
    this.apiService.getGames().subscribe( (res: any) => {
      res.forEach(data => {
        this.orginalGameList.push(data);
        this.gameList = this.orginalGameList;
      });

    });
    this.apiService.getWorks().subscribe( (res: any) => {
      res.forEach(data => {
        this.orginalWorkList.push(data);
      });
      // this.workList = this.orginalWorkList;
    });
    this.selectedList = [];
    // this.gameList = this.orginalGameList;
    this.searchField.valueChanges
      .pipe(debounceTime(500))
      .subscribe(term => {
        console.log(term);
        if (term === '') {
          if (this.switchStatus === 'game') {
            this.gameList = this.orginalGameList;
          } else {
            this.gameList = this.orginalWorkList;
          }
        }
        if (this.switchStatus === 'game') {
          this.gameList = this.orginalGameList.filter( game => {
            return game.name.toLowerCase().includes(term.toLowerCase());
          });
        } else {
          this.gameList = this.orginalWorkList.filter( game => {
            return game.name.toLowerCase().includes(term.toLowerCase());
          });
        }


        // this.directiveRef.update();
      });
  }
  ngAfterViewChecked() {
    this.cdf.detectChanges();
  }
  switchTab() {
    console.log(this.selectedList);
    if (this.switchStatus === 'game') {
      this.switchStatus = 'work';
      this.gameList = this.orginalWorkList;
    } else {
      this.switchStatus = 'game';
      this.gameList = this.orginalGameList;
    }
  }
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  handleSelect(type: string) {
    this.router.navigate(['/select', {type: type}]);
  }
  pillSelect(event) {
    console.log(this.selectedList, event);
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
nextGame() {
  this.gameList = this.orginalGameList;
  this.switchStatus = 'game';
  this.fullpage_api.moveSectionDown();
}
nextWork() {
  this.gameList = this.orginalWorkList;
  this.switchStatus = 'work';
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
    this.loading = 'load';
    console.log(this.selectedList);
    const games = [];
    const works = [];
    if (this.mobile) {
      this.lastSection = true;
      this.fullpage_api.moveSectionDown();

    }
    this.orginalGameList.forEach(data => {
      if (this.selectedList.includes(data.id)) {
        games.push(data.id);
      }
    });
    this.orginalWorkList.forEach(data => {
      if (this.selectedList.includes(data.id)) {
        works.push(data.id);
      }
    });
    this.apiService.postGames(games, works).toPromise().then( res => {
      console.log(res);

    Object.keys(res).forEach(key => {
        if (key === 'price') {
          this.result[key] = res[key];
        } else if (key === 'psu') {
          this.result[key] = [res[key][0], res[key][2]] ;
        } else {
          this.result[key] = res[key][0];
        }
      }
    );
    console.log(this.result);
    this.loading = 'result';
    }).catch (err => {
      console.log(err);
    });
  }
}
