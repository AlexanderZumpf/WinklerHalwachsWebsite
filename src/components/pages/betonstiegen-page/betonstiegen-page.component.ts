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
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpeg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpeg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
    "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg",
    "26.jpg", "27.jpeg", "28.jpg", "29.jpg", "30.jpg",
    "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg",
    "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
    "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg",
    "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg",
    "51.jpg", "52.jpeg", "53.jpeg", "54.jpg", "55.jpg",
    "56.jpg", "57.jpg", "58.jpeg", "59.jpg", "60.jpeg",
    "61.jpg", "62.jpg", "63.jpg", "64.jpg", "65.jpg",
    "66.jpg", "67.jpeg", "68.jpg", "69.jpg", "70.jpg",
    "71.jpg", "72.jpeg", "73.jpg", "74.jpg", "75.jpg",
    "76.jpg", "77.jpg", "78.jpg", "79.jpeg", "80.jpeg",
    "81.jpg", "82.jpeg", "83.jpeg", "84.jpg", "85.jpg",
    "86.jpg", "87.jpg", "88.jpg", "89.jpeg", "90.jpg",
    "91.jpg", "92.jpg", "93.jpg", "95.jpeg", "96.jpeg",
    "97.jpg", "98.jpg", "99.jpg", "100.jpeg"
  ];
}

