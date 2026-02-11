import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-panoramahang-19-page',
  templateUrl: './project-panoramahang-19-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPanoramahang19PageComponent {
  pictureCount = 13;
  pictureList = [];

  constructor() {
    this.pictureList = [];

    for (let idx = 0; idx < this.pictureCount; idx++) {
      this.pictureList.push(idx + 1);
    }
  }
}
