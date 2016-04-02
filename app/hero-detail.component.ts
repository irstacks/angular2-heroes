import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from "angular2/router";

import { Hero } from './hero';
import { HeroService } from "./hero.service";


@Component({
  selector: 'hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {

  }

  ngOnInit() {
    // Notice how we extract the id by calling the RouteParams.get method.
    let id = +this._routeParams.get('id'); // The hero id is a number. Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    // This breaks Safari. 
    window.history.back();
  }
}
