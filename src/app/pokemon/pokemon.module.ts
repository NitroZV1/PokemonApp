import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {RouterModule, Routes} from "@angular/router";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonService} from "./pokemon.service";
import {FormsModule} from "@angular/forms";
import {FormPokemonComponent} from "./form-pokemon/form-pokemon.component";
import {EditPokemonComponent} from "./edit-pokemon/edit-pokemon.component";
import {AddPokemonComponent} from "./add-pokemon/add-pokemon.component";
import {SearchPokemonComponent} from "./search-pokemon/search-pokemon.component";
import {LoaderComponent} from "./loader/loader.component";
import {AuthGuard} from "../auth.guard";

export const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard] },
  { path: 'add/pokemon', component: AddPokemonComponent, canActivate: [AuthGuard] },
  { path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard] },
  { path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    BorderCardDirective,
    ListPokemonComponent,
    FormPokemonComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes),
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
