import { Injectable, Optional } from '@angular/core';
import { LoggerConfig } from './logger.config';
import {LogFormatterService} from './log-formatter.service';
import { LoggerModule } from './logger.module';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(@Optional() private config: LoggerConfig,
    private logFormatter: LogFormatterService
  ) {
  }

  debug(message: string): void {
    if (!this.config.enableDebug) return;
    console.debug(this.logFormatter.format(message));
  }

  log(message: string): void {
    console.log(this.logFormatter.format(message));
  }

}
