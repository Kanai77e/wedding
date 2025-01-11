import {Component, input} from '@angular/core';

export interface Character {
  name: string;
  race: string;
  class: string;
  level: number;
  attributes: Attributes;
  backstory: string;
  abilities: string[];
  equipment: string[];
}

export interface Attributes {
  str: number;
  dex: number;
  cha: number;
  wis: number;
  int: number;
  con: number;
}

@Component({
  selector: 'app-character-sheet',
  imports: [],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.css'
})

export class CharacterSheetComponent {
  character = input.required<Character>()
}
