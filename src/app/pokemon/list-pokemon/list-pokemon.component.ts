import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import { Router, RouterLink } from "@angular/router";
import {PokemonService} from "../pokemon.service";
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BorderCardDirective } from '../border-card.directive';
import {NgFor, DatePipe, NgIf} from '@angular/common';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import {AuthService} from "../../auth.service";

@Component({
    selector: 'app-list-pokemon',
    templateUrl: './list-pokemon.component.html',
    standalone: true,
    imports: [SearchPokemonComponent, NgFor, NgIf, BorderCardDirective, RouterLink, DatePipe, PokemonTypeColorPipe]
})

export class ListPokemonComponent implements OnInit{
    pokemonList: Pokemon[];
    auth: AuthService;

    constructor(private router: Router, private pokemonService: PokemonService, private authService: AuthService) { }

    ngOnInit() {
        this.auth = this.authService;

        this.pokemonService.getPokemonList()
            .subscribe(pokemonList => this.pokemonList = pokemonList);
    }

    selectPokemon(pokemon: Pokemon) {
        this.router.navigate(['pokemon', pokemon.id])
    }

    public getPokemonImageUrl(pictureId: string): string {
        return `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${pictureId}.png`;
    }
}
