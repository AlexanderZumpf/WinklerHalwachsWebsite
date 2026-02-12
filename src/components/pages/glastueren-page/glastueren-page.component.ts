import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-glastueren-page',
  templateUrl: './glastueren-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlastuerenPageComponent {
  pictureList = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpeg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpeg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpeg", "14.jpg", "15.jpg",
    "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "22.jpg", "23.jpeg", "24.jpg", "25.jpg"
  ];
}

