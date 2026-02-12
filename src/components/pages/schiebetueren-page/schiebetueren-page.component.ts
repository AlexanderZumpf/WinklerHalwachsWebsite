import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-schiebetueren-page',
  templateUrl: './schiebetueren-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchiebetuerenPageComponent {
  pictureList = [
    "1.jpg", "2.jpeg", "3.jpg", "4.jpeg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
    "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg",
    "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
    "32.jpeg", "33.jpg", "34.jpg", "35.jpg", "36.jpeg",
    "37.jpg"
  ];
}

