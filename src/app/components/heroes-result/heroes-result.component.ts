import { ActivatedRoute, Router } from '@angular/router';
import { HeroService, Hero } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-result',
  templateUrl: './heroes-result.component.html',
  styles: []
})
export class HeroesResultComponent implements OnInit {

  heroes: Hero[] = [];
  termino: string;

  constructor( private _heroService: HeroService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(param => {
      this.termino = param.text;
      this.heroes = _heroService.findHero(this.termino);
    });
   }

  ngOnInit() {
  }

  heroDetail(index: number) {
    this.router.navigate( ['/heroes', index] );
  }

}
