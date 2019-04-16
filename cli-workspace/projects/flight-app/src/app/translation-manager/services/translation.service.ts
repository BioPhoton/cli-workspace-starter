import {Inject, Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Config} from '../interfces/config.interface';
import {CONFIG_TOKEN} from '../tokens/config.token';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(
    @Inject(CONFIG_TOKEN) private configToken: Config,
    private translateService: TranslateService) {
    this.translateService.setDefaultLang(configToken.defaultLang);
    this.translateService.use(configToken.defaultLang);
  }


  useLang(lang: string) {
    // validation
    if(this.configToken.languages.includes(lang)) {
      this.translateService.use(lang);
    } else {
      this.translateService.use(this.configToken.defaultLang);
    }

  }


}
