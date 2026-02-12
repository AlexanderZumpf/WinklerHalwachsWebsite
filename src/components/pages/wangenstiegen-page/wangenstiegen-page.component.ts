import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wangenstiegen-page',
  templateUrl: './wangenstiegen-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WangenstiegenPageComponent {
  pictureList = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpg", "14.jpeg", "15.jpeg",
    "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpeg", "24.jpg", "25.jpg",
    "26.jpg", "27.jpg", "28.jpg", "29.jpeg", "30.jpg",
    "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg",
    "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
    "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg",
    "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg",
    "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpeg",
    "56.jpg", "57.jpg", "58.jpg", "59.jpg", "60.jpg",
    "61.jpg", "62.jpg", "63.jpg", "64.jpg", "65.jpg",
    "66.jpg", "67.jpg", "68.jpg", "69.jpg", "70.jpg",
    "71.jpg", "72.jpg", "73.jpg", "74.jpg", "75.jpeg", 
    "76.jpeg", "77.jpg", "78.jpg", "79.jpeg", "80.jpeg",
    "81.jpg", "82.jpg", "84.jpg", "85.jpg", "86.jpg"
  ];
}