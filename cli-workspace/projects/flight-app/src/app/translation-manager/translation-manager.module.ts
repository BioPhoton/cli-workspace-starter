import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {TranslateLoader, TranslatePipe, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Config} from './interfces/config.interface';
import {CONFIG_TOKEN} from './tokens/config.token';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslatePipe]
})
export class TranslationManagerModule {

  static forRoot(config: Config): ModuleWithProviders {

    return {
      ngModule: TranslationManagerModule,
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: config
        }
      ]
    }
  }

  static forFeature(): ModuleWithProviders {

    return {
      ngModule: TranslationManagerModule,
      providers: []
    }
  }

}
