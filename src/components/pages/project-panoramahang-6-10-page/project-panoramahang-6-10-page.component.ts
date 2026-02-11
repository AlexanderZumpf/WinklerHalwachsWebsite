import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-panoramahang-6-10-page',
  templateUrl: './project-panoramahang-6-10-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPanoramahang610PageComponent {
  pictureCount = 17;
  pictureList = [];

  constructor() {
    this.pictureList = [];

    for (let idx = 0; idx < this.pictureCount; idx++) {
      this.pictureList.push(idx + 1);
    }
  }
}
