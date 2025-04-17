import {Component, computed, input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-maps-container',
  imports: [],
  templateUrl: './maps-container.component.html',
  styleUrl: './maps-container.component.css'
})
export class MapsContainerComponent {
  mapUrl = input.required<string>()
  safeMapUrl = computed<SafeResourceUrl>(() => this._domSanitizer.bypassSecurityTrustResourceUrl(this.mapUrl()))

  constructor(private readonly _domSanitizer: DomSanitizer) {
  }
}
