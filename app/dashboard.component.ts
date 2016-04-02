import {Component, OnInit} from 'angular2/core';
import { Router } from "angular2/router";

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'dashboard',
  // template: `<h3>Dashboard</h3>`
  templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  // create a heroes array property
  heroes: Hero[] = [];

  // inject the HeroService in the constructor and hold it in a private _heroService field.
  constructor(
    private _router: Router,
    private _heroService: HeroService) {

  }

  // call the service to get heroes inside the Angular ngOnInit lifecycle hook
  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

  gotoDetail(hero: Hero) {
    // set a route link parameters array
    let link = ['HeroDetail', { id: hero.id }];
    // pass the array to the router's navigate method.
    this._router.navigate(link);
  }
}
