import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-windfaenge-page',
  templateUrl: './windfaenge-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindfaengePageComponent {
  pictureList = [
    "1.jpeg", "2.jpg", "3.jpeg", "4.jpg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
    "16.jpg", "17.jpeg", "18.jpeg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpeg", "25.jpg",
    "26.jpg", "27.jpg", "28.jpg", "29.jpeg", "30.jpeg",
    "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpeg",
    "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
    "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg",
    "46.jpg", "47.jpg", "49.jpg", "50.jpeg", "51.jpeg",
    "52.jpg"
  ];
}
