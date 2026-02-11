import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Fix: Replaced @HostListener with the host property for better practice.
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class ScrollToTopComponent {
  showButton = signal(false);

  onWindowScroll() {
    if (window.scrollY > 400) {
      this.showButton.set(true);
    } else {
      this.showButton.set(false);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
