import {Component, OnInit} from 'angular2/core';
import { Router } from "angular2/router";
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';


@Component({
  selector: "heroes",
  templateUrl: 'app/heroes.component.html',
  styleUrls: [
    'app/heroes.component.css'
  ],
  directives: [HeroDetailComponent],
  providers: []
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero; // no initial selection

  constructor(
    private _router: Router,
    private _heroService: HeroService) {
    }

  getHeroes() {
    // this.heroes = this._heroService.getHeroes();
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this._router.navigate(['HeroDetail', {id: this.selectedHero.id }]);
  }
}

// heroes: Hero[];
