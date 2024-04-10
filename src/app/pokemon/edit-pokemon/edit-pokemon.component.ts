import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";
import { FormPokemonComponent } from '../form-pokemon/form-pokemon.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-edit-pokemon',
    template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]=getPokemonImageUrl(pokemon.picture)>
    </p>
    <app-form-pokemon *ngIf="pokemon" [pokemon]="pokemon"></app-form-pokemon>
  `,
    styles: ``,
    standalone: true,
    imports: [NgIf, FormPokemonComponent]
})
export class EditPokemonComponent implements OnInit{
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
          .subscribe(pokemon => this.pokemon = pokemon);
    } else {
      this.pokemon = undefined
    }
  }

  public getPokemonImageUrl(pictureId: string): string {
    return `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${pictureId}.png`;
  }

}
