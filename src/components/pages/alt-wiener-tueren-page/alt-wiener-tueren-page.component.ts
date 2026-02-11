import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alt-wiener-tueren-page',
  templateUrl: './alt-wiener-tueren-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AltWienerTuerenPageComponent {}
