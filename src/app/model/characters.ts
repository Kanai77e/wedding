export interface Character {
  name: string;
  race: string;
  class: string;
  level: number;
  attributes: Attributes;
  backstory: string;
  abilities: string[];
  equipment: string[];
  imagePath: string;
  companions: Companion[]
}

export interface Attributes {
  str: number;
  dex: number;
  cha: number;
  wis: number;
  int: number;
  con: number;
}

export interface Companion {
  name: string;
  race: string;
  class: string;
  level: number;
  imagePath: string;
}

const kathi: Companion = {
  name: 'Kathi',
  race: 'Human',
  class: '',
  level: 26,
  imagePath: 'default.jpg',
}

const tobias: Companion = {
  name: 'Tobias',
  race: 'Human',
  class: '',
  level: 26,
  imagePath: 'default.jpg',
}

const danok: Companion = {
  name: 'Danok',
  race: 'Human',
  class: '',
  level: 26,
  imagePath: 'default.jpg',
}

const alex: Companion = {
  name: 'Alex',
  race: 'Human',
  class: '',
  level: 26,
  imagePath: 'default.jpg',
}

export const lucy: Character = {
  name: 'Lucy',
  race: 'Human',
  class: 'ÄWÄWÄ',
  level: 26,
  attributes: {str: 10, dex: 10, cha: 10, wis: 10, int: 10, con: 10},
  backstory: 'ÄWÄWÄ',
  abilities: ['eepy +10', 'hangry +2'],
  equipment: ['adhs toys'],
  imagePath: 'characters/lucy.jpg',
  companions: [kathi, tobias]
}

export const julz: Character = {
  name: 'Lucy',
  race: 'Human',
  class: 'ÄWÄWÄ',
  level: 26,
  attributes: {str: 10, dex: 10, cha: 10, wis: 10, int: 10, con: 10},
  backstory: 'ÄWÄWÄ',
  abilities: ['eepy +10', 'hangry +2'],
  equipment: ['adhs toys'],
  imagePath: 'characters/julz.jpg',
  companions: [danok, alex]
}

