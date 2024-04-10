import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";
import {Router} from "@angular/router";
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-form-pokemon',
    templateUrl: './form-pokemon.component.html',
    styleUrls: ['./form-pokemon.component.css'],
    standalone: true,
    imports: [
        NgIf,
        FormsModule,
        NgFor,
        LoaderComponent,
        PokemonTypeColorPipe,
    ],
})
export class FormPokemonComponent implements OnInit{
  @Input() pokemon: Pokemon;
  types: string[];
  isAddForm: boolean;

  constructor(private router: Router, private pokemonService: PokemonService) { }
  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add')
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked

    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type)
      this.pokemon.types.splice(index, 1);
    }
  }

  onSubmit() {
    // this.router.navigate(['/pokemon', this.pokemon.id])
    if (this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon)
          .subscribe( (pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id]));
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
          .subscribe( () => this.router.navigate(['/pokemon', this.pokemon.id]));
    }

  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length > 2 && !(this.hasType(type))) {
      return false
    }

    return true;
  }

  public getPokemonImageUrl(pictureId: string): string {
    return `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${pictureId}.png`;
  }

  protected readonly Pokemon = Pokemon;
}
