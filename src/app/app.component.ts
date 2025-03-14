import {Component} from '@angular/core';
import {CharacterSheetComponent} from './character-sheet/character-sheet.component';
import {CountdownComponent} from './countdown/countdown.component';
import {XDividerComponent} from './x-divider/x-divider.component';
import {julz, lucy} from './model/characters';
import {MapsContainerComponent} from './maps-container/maps-container.component';

@Component({
  selector: 'app-root',
  imports: [
    CharacterSheetComponent,
    CountdownComponent,
    XDividerComponent,
    MapsContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly lucy = lucy;
  protected readonly julz = julz;
  protected readonly title = 'wedding';
}
