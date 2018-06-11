import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';
import { LoggerConfig } from './logger.config';
import {LoggerService} from './logger.service';
import {DefaultLogFormatterService} from './default-log-formatter.service';
import {LogFormatterService} from './log-formatter.service';

const defaultFormatterConfig = [{
  provide: LogFormatterService,
  useClass: DefaultLogFormatterService
}];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LogMonitorComponent
  ],
  exports: [
    LogMonitorComponent
  ]
})
export class LoggerModule {

  static forRoot(config: LoggerConfig): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config },
        (!config.logFormatterType) ?
          defaultFormatterConfig :
          [{provide: LogFormatterService, useClass: config.logFormatterType}],
      ]
    }
  }

}
