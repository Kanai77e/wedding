import {Component} from '@angular/core';
import {julz, lucy} from "../model/characters";
import {CharacterSheetComponent} from "../character-sheet/character-sheet.component";
import {CountdownComponent} from "../countdown/countdown.component";
import {MapsContainerComponent} from "../maps-container/maps-container.component";
import {XDividerComponent} from "../x-divider/x-divider.component";

@Component({
  selector: 'app-landing-page',
  imports: [
    CharacterSheetComponent,
    CountdownComponent,
    MapsContainerComponent,
    XDividerComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  protected readonly julz = julz;
  protected readonly lucy = lucy;
}
