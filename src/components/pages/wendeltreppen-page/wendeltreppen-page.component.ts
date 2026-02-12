import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wendeltreppen-page',
  templateUrl: './wendeltreppen-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WendeltreppenPageComponent {
  pictureList = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpeg",
    "6.jpg", "7.jpg", "8.jpeg", "10.jpeg", "11.jpg",
    "12.jpeg", "13.jpeg", "14.jpg", "15.jpg", "16.jpg",
    "17.jpeg"
  ];
}
