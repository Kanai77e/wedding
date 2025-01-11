import {Component} from '@angular/core';
import {CharacterSheetComponent} from './character-sheet/character-sheet.component';

@Component({
  selector: 'app-root',
  imports: [
    CharacterSheetComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wedding';
}
