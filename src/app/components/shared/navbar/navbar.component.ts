import { HeroService } from './../../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroService: HeroService, private router: Router) { }

  ngOnInit() {
  }

  search(text: string) {
    this.router.navigate(['/heroes-search'], { queryParams: { text : text} });
  }
}
