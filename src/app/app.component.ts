import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'tiles';

  onMeshSelected(event: {name: string, position: [number, number, number]}) {
    alert(event.name);
  }
}
