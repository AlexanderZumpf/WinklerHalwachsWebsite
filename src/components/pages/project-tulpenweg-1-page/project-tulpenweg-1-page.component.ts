import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-tulpenweg-1-page',
  templateUrl: './project-tulpenweg-1-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTulpenweg1PageComponent {
  pictureCount = 0;
  pictureList = [];

  constructor() {
    this.pictureList = [];

    for (let idx = 0; idx < this.pictureCount; idx++) {
      this.pictureList.push(idx + 1);
    }
  }}
