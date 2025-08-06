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
  class: 'Monk',
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
  backstory: 'Einst wuchs in einem weit entfernten Land (NRW) ein kleines Mädchen heran. Nachdem sie ihre Jugend dort verbracht hatte, zog sie mit ihrem Herzen voller Liebe für Tiere, Kinder und Musik in die weite Welt, um sich weiterzubilden. Als die Welt durch eine seltsame Krankheit stillstand, traf sie auf ihren Reisen auf einen mutigen Paladin, der sich ihr als Reisebegleiter für ihre Abenteuer anbot. Schnell verliebte sie sich in ihn und so kam es, dass sie von da an die Abenteuer des Lebens zusammen durschritten.',
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
  backstory: 'In einem beschaulichen Königreich namens Feldkahl, wurde ein Junge geboren, der sich nie ganz sicher war, wohin sein Weg ihn führen würde. Mal schlug er diesen Pfad ein, mal jenen – stets neugierig, stets bereit, neue Questen zu wagen, ohne das Ziel im Detail zu kennen. Jahre vergingen, und viele Rollen nahm er an – mal als Schüler, mal als Lehrling, mal als Geselle, mal als Student, mal als Tagträumer. Doch erst, als die Welt für eine Weile stillzustehen schien, trat Lucy in sein Leben und zog ihn sofort in ihren Bann. Was als zufällige Begegnung auf der großen Weltkarte begann, wurde für die beiden zum größten aller Abenteuer: der Liebe.',
  abilities: ['Mr. Krab\'s Rage +99', 'Impostor Syndrome +4', 'hangry +2'],
  equipment: ['E-Gitarre', 'Horrorfilme', 'Bratpfanne', 'Cola'],
  imagePath: 'characters/julz-3.jpg',
  companions: [danok, alex]
}

