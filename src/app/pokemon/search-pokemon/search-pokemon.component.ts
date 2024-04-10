import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit{
  searchText = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemons$ = this.searchText.pipe(
      // {..."a"."ab"..."abz"."ab"...."abc"......}
      debounceTime(300),
      // {..."ab"...."ab"...."abc"......}
      distinctUntilChanged(),
      // {..."ab"........"abc"......}
      switchMap((text) => this.pokemonService.searchPokemon(text))
      // {...pokemonList(ab)........pokemonList(abc)......}
    )
  }

  search(text: string) {
    this.searchText.next(text)
  }

  goToDetailPokemon(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
