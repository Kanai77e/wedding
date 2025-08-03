import {Component, input} from '@angular/core';
import {Character} from '../model/characters';

@Component({
  selector: 'app-character-sheet',
  imports: [],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.css'
})

export class CharacterSheetComponent {
  character = input.required<Character>()
  showAttributes = input<boolean>(false);
}
