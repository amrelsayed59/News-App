import { Component, OnInit, OnDestroy } from '@angular/core';
import { Banner, Sectors } from '@core/data/homepage';
import { GlobalService } from '@core/utils/global.service';
import { TranslateService } from '@ngx-translate/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
  disabled: boolean = false;
  bannerInfo: Array<Banner> = [];
  sectors: Array<Sectors> = [];
  currentLang:string;

  config: SwiperConfigInterface = {
    a11y: true,
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    observeParents: true,
    centeredSlides: false,
  };

  constructor(private _globalService: GlobalService,  public translate: TranslateService,) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void {
    this._globalService.transparentNav.next(true);
    this.getBannerInfo();
    this.getSectors();
  }

  getBannerInfo(): void {
    this.bannerInfo = [
      {
        urlToImage: 'assets/images/banar-bg.png',
        category: 'Mission',
        description: 'Your Business Expansion Destination',
      },
      {
        urlToImage: 'assets/images/banar-bg.png',
        category: 'Outsource',
        description: 'Engineering Experts',
      },
      {
        urlToImage: 'assets/images/banar-bg.png',
        category: 'Deploy',
        description: 'Accelerate Business Productivity',
      },
    ];
  }

  getSectors(): void {
    this.sectors = [
      {
        urlToImage: 'assets/images/travel.svg',
        category: 'Tourism',
      },
      {
        urlToImage: 'assets/images/tree-solid.svg',
        category: 'Agriculture',
      },
      {
        urlToImage: 'assets/images/house.svg',
        category: 'Real Estate',
      },
      {
        urlToImage: 'assets/images/travel.svg',
        category: 'Industials',
      },
      {
        urlToImage: 'assets/images/tree-solid.svg',
        category: 'Energy',
      },
      {
        urlToImage: 'assets/images/heartbeat.svg',
        category: 'Healthcare',
      },
    ];
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  ngOnDestroy() {
    this._globalService.transparentNav.next(false);
  }
}
