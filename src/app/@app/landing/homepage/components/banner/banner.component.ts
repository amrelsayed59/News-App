import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@core/utils/global.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  disabled: boolean = false;
  config: SwiperConfigInterface = {
    a11y: true,
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    spaceBetween: 30,
    observeParents: true,
    centeredSlides: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this._globalService.transparentNav.next(true);
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

}
