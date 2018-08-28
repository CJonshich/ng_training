import { HeroService, Hero } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: Hero[] = [];

  constructor( private _heroService: HeroService) {

  }

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
    console.log(this.heroes);
  }

}
