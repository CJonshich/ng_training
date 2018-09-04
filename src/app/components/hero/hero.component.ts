import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

  hero: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroService: HeroService) {
    this.activatedRoute.params.subscribe( params => {
      this.hero = _heroService.getHero(params.id);
    });
  }

  ngOnInit() {
  }

}
