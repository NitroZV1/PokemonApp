import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    standalone: true,
    imports: [NgIf, NgFor, LoaderComponent, DatePipe, PokemonTypeColorPipe]
})
export class DetailPokemonComponent implements OnInit{
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService, private title: Title) { }
  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
          .subscribe(pokemon => {
            this.pokemon = pokemon;
            this.initTitle(pokemon);
          });
    }
  }

  goToPokemonList() {
    this.router.navigate(['pokemons'])
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['edit/pokemon', pokemon.id]);
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemon(pokemon.id)
        .subscribe( () => this.goToPokemonList());
  }

  public getPokemonImageUrl(pictureId: string): string {
    return `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${pictureId}.png`;
  }

  initTitle(pokemon: Pokemon|undefined) {
    if (!pokemon) {
      this.title.setTitle('Pokémon not found');
      return;
    }

    this.title.setTitle(pokemon.name);
  }
}
