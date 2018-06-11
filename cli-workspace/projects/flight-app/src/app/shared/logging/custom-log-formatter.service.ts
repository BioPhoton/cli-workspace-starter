import { Injectable } from '@angular/core';
import { LogFormatterService } from 'logger-lib';

@Injectable({
  providedIn: 'root'
})
export class CustomLogFormatterService implements LogFormatterService {

  constructor() { }

  format(message: string): string {
    const now = new Date().toISOString();
    return `[${now}] ${message}`;
  }

}
