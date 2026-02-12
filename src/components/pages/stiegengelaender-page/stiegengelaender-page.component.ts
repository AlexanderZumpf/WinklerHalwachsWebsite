import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stiegengelaender-page',
  templateUrl: './stiegengelaender-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StiegengelaenderPageComponent {
  pictureList = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
    "16.jpg", "17.jpg", "19.jpeg", "20.jpg",
    "21.jpeg", "22.jpg", "23.jpeg", "24.jpg", "25.jpeg",
    "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
    "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpeg",
    "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
    "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg",
    "46.jpeg", "47.jpeg", "48.jpg", "49.jpeg", "50.jpg",
    "51.jpeg", "52.jpg", "53.jpg", "54.jpeg", "55.jpg",
    "56.jpg", "57.jpg", "58.jpg", "59.jpg", "60.jpg",
    "61.jpg", "62.jpg", "63.jpg", "64.jpg", "65.jpg",
    "66.jpg", "67.jpeg", "68.jpg", "69.jpg", "70.jpg",
    "71.jpg", "72.jpeg", "73.jpeg", "74.jpg", "75.jpg",
    "76.jpg", "77.jpg", "78.jpg", "79.jpg", "80.jpg",
    "81.jpg", "82.jpg", "83.jpg", "84.jpg", "85.jpg",
    "86.jpg", "87.jpg", "88.jpg", "89.jpeg", "90.jpg",
    "91.jpg", "93.jpg", "94.jpg"
  ];
}
