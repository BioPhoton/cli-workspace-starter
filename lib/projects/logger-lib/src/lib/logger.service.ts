import { Injectable, Optional } from '@angular/core';
import { LoggerConfig } from './logger.config';
import { LoggerModule } from './logger.module';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(@Optional() private config: LoggerConfig) {
    console.debug('logger-service');
    console.debug('config', config);
  }

  debug(message: string): void {
    if (!this.config.enableDebug) return;
    console.debug(message);
  }

  log(message: string): void {
    console.log(message);
  }

}
