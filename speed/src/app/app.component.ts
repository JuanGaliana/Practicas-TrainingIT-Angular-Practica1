import { Component } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica 4';
  version = environment.developerVersion;
  constructor(swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg =
            'current: ' +
            event.current.hash +
            '. Load new: ' +
            event.available.hash +
            ' ?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      );
    }
  }
}
