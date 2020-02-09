import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  heroes: Hero[] = HEROES;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit(): void {}
}
