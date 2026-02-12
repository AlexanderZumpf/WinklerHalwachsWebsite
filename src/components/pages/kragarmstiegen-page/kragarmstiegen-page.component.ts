import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kragarmstiegen-page',
  templateUrl: './kragarmstiegen-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KragarmstiegenPageComponent {
  pictureList = [
    "1.jpeg", "2.jpg", "3.jpeg", "4.jpeg", 
    "6.jpeg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpeg", "14.jpg", "15.jpeg",
    "16.jpeg", "18.jpeg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg"
  ];
}
