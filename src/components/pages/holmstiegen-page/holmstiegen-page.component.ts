import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-holmstiegen-page',
  templateUrl: './holmstiegen-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HolmstiegenPageComponent {
  pictureList = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpeg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpeg", "13.jpeg", "14.jpg", "15.jpg",
    "16.jpg", "17.jpg", "18.jpg", "19.jpg"
  ];
}
