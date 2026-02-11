import { DOCUMENT } from '@angular/common';
import { Injectable, signal, effect, inject } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Fix: Explicitly type `document` to resolve type inference issue.
  private readonly document: Document = inject(DOCUMENT);
  private readonly localStorageKey = 'app-theme';

  theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const currentTheme = this.theme();
      if (currentTheme === 'dark') {
        this.document.documentElement.classList.add('dark');
      } else {
        this.document.documentElement.classList.remove('dark');
      }
      // Ensure this only runs in the browser
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.localStorageKey, currentTheme);
      }
    });
  }

  toggleTheme() {
    this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
  }

  private getInitialTheme(): Theme {
    // Check if running in a browser environment
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return 'light';
    }
    
    const storedTheme = localStorage.getItem(this.localStorageKey);
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
