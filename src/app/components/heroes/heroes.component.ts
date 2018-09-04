import { HeroService, Hero } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: Hero[] = [];

  constructor( private _heroService: HeroService, private router: Router) {

  }

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
  }

  heroDetail(index) {
    this.router.navigate(['/heroes', index]);
  }

}
