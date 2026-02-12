import { Injectable, signal } from '@angular/core';

export type CookieConsent = 'pending' | 'necessary' | 'all';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  private readonly localStorageKey = 'cookie-consent';

  consentState = signal<CookieConsent>(this.getInitialConsent());

  constructor() {}

  acceptAll(): void {
    this.updateConsent('all');
  }

  acceptNecessary(): void {
    this.updateConsent('necessary');
  }
  
  private updateConsent(consent: 'necessary' | 'all'): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.localStorageKey, consent);
    }
    this.consentState.set(consent);
  }

  private getInitialConsent(): CookieConsent {
    if (typeof localStorage === 'undefined') {
      return 'pending';
    }
    const storedConsent = localStorage.getItem(this.localStorageKey);
    if (storedConsent === 'all' || storedConsent === 'necessary') {
      return storedConsent;
    }
    return 'pending';
  }
}