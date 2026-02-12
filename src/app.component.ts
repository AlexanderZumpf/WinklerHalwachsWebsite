import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ScrollToTopComponent } from './components/shared/scroll-to-top/scroll-to-top.component';
import { ThemeService } from './services/theme.service';
import { CookieBannerComponent } from './components/shared/cookie-banner/cookie-banner.component';
import { CookieService } from './services/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollToTopComponent, CookieBannerComponent],
})
export class AppComponent {
  // Inject the service to ensure it's initialized on app start.
  private themeService = inject(ThemeService);
  private cookieService = inject(CookieService);
}
