import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stahlstiegen-page',
  templateUrl: './stahlstiegen-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StahlstiegenPageComponent {
  pictureList = [
    "2.jpg", "3.jpg", "4.jpeg", "5.jpg",
    "6.jpeg", "7.jpeg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpeg", "13.jpg", "14.jpeg", "15.jpeg",
    "16.jpeg", "17.jpeg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpeg", "22.jpg", "23.jpg", "25.jpg",
    "26.jpg", "27.jpg", "28.jpeg", "29.jpg"
  ];
}
