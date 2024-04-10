import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <app-form-pokemon [pokemon]="pokemon"></app-form-pokemon>
  `,
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;
  ngOnInit() {
    this.pokemon = new Pokemon();
  }
}
