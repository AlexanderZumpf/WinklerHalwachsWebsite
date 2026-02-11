import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-rosenweg-page',
  templateUrl: './project-rosenweg-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectRosenwegPageComponent {
  pictureCount = 20;
  pictureList = [];

  constructor() {
    this.pictureList = [];

    for (let idx = 0; idx < this.pictureCount; idx++) {
      this.pictureList.push(idx + 1);
    }
  }
}
