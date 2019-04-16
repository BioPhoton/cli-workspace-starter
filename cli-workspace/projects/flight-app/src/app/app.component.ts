import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslationService} from './translation-manager/services/translation.service';
@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private tmS: TranslationService){
  }

  setLang(lang: string): void {
    this.tmS.useLang(lang);
  }

}

