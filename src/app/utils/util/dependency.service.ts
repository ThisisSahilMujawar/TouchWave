import { Injectable, Inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const GLOBAL_WINDOW = new InjectionToken<Window | null>('Global Window Object', {
  providedIn: 'root',
  factory: () => (typeof window !== 'undefined' ? window : null),
});

@Injectable({
  providedIn: 'root',
})
export class DependencyService {
  private readonly window: Window | null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.window = isPlatformBrowser(this.platformId) ? window : null;
  }

  get() {
    return this.window;
  }
}
