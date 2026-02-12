import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-betonstiegen-page',
  templateUrl: './betonstiegen-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BetonstiegenPageComponent {
  pictureList = [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg",
    "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg",
    "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg",
    "16.jpeg", "17.jpeg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg",
    "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
    "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg",
    "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
    "41.jpg", "42.jpg"
  ];
}