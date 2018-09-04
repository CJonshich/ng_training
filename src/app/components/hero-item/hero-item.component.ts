import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../services/hero.service';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {

  @Input() hero: Hero;
  @Input() index: number;

  @Output() selectedHero: EventEmitter<number>;

  constructor(private router: Router) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit() {
  }

  heroDetail() {
    this.router.navigate(['/heroes', this.hero.id]);
    // this.selectedHero.emit(this.index);
  }

}
