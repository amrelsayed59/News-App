import { Component, OnInit } from '@angular/core';
import { LocalStorageKeys } from '@core/data/LocalStorage-Keys.enum';
import { GlobalService } from '@core/utils/global.service';
import { TranslationService } from '@core/utils/translation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-link-header',
  templateUrl: './link-header.component.html',
  styleUrls: ['./link-header.component.scss'],
})
export class LinkHeaderComponent implements OnInit {
  isTransparentNav: boolean;
  currentLang: string;

  constructor(
    private _globalService: GlobalService,
    public translate: TranslateService,
    private translationService: TranslationService,
  ) {}

  ngOnInit(): void {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);

    this._globalService.transparentNav.subscribe((val: boolean) => {
      this.isTransparentNav = val;
    });
  }

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
    // window.location.reload()
  }


  // changeLang(lang) {
  //   localStorage.setItem('currentLang', lang);
  //   this.translationService.setAppDefaultLang(lang);
  //   this.translate.setDefaultLang(lang);
  //   this.translate.use(lang);
  // }

}
