import {Component} from '@angular/core';
import {Character, CharacterSheetComponent} from './character-sheet/character-sheet.component';
import {CountdownComponent} from './countdown/countdown.component';
import {XDividerComponent} from './x-divider/x-divider.component';

@Component({
  selector: 'app-root',
  imports: [
    CharacterSheetComponent,
    CountdownComponent,
    XDividerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wedding';

  lucy: Character = {
    name: 'Lucy',
    race: 'Human',
    class: 'ÄWÄWÄ',
    level: 26,
    attributes: {str: 10, dex: 10, cha: 10, wis: 10, int: 10, con: 10},
    backstory: 'ÄWÄWÄ',
    abilities: ['eepy +10', 'hangry 2'],
    equipment: ['adhs toys'],
    imagePath: 'default.jpg'
  }
  julz: Character = {
    name: 'Lucy',
    race: 'Human',
    class: 'ÄWÄWÄ',
    level: 26,
    attributes: {str: 10, dex: 10, cha: 10, wis: 10, int: 10, con: 10},
    backstory: 'ÄWÄWÄ',
    abilities: ['eepy +10', 'hangry 2'],
    equipment: ['adhs toys'],
    imagePath: 'default.jpg'
  }
}
