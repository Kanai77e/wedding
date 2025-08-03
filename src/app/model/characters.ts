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
  race: 'Elf',
  class: 'Ranger',
  level: 28,
  imagePath: 'characters/kathi.png',
}

const tobias: Companion = {
  name: 'Tobias',
  race: 'Human',
  class: '',
  level: 30,
  imagePath: 'characters/tobias.jpg',
}

const danok: Companion = {
  name: 'Danok',
  race: 'Dwarf',
  class: 'Warlock',
  level: 29,
  imagePath: 'characters/danok.jpg',
}

const alex: Companion = {
  name: 'Alex',
  race: 'Human',
  class: 'Barbarian',
  level: 31,
  imagePath: 'characters/alex.jpg',
}

export const lucy: Character = {
  name: 'Lucy',
  race: 'Half-Elf',
  class: 'Druid',
  level: 27,
  attributes: {str: 10, dex: 12, cha: 13, wis: 13, int: 13, con: 13},
  backstory: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  abilities: ['eepy +10', 'overthinking +3,5', 'hangry +2'],
  equipment: ['Akkordeon', 'Bücher', 'Handy', 'Snacks'],
  imagePath: 'characters/lucy-1.jpg',
  companions: [kathi, tobias]
}

export const julz: Character = {
  name: 'Julz',
  race: 'Human',
  class: 'Paladin',
  level: 32,
  attributes: {str: 12, dex: 11, cha: 15, wis: 12, int: 13, con: 12},
  backstory: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  abilities: ['Mr. Krab\'s Rage +99', 'Impostor Syndrome +4', 'hangry +2'],
  equipment: ['E-Gitarre', 'Horrorfilme', 'Bratpfanne', 'Cola'],
  imagePath: 'characters/julz-3.jpg',
  companions: [danok, alex]
}

