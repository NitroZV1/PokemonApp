import {Routes} from "@angular/router";
import {PokemonService} from "./pokemon.service";

export default [{
    path: '',
    providers: [PokemonService],
    children: [
        {
            path: 'edit/pokemon/:id',
            loadComponent: () => import('./edit-pokemon/edit-pokemon.component').then(module => module.EditPokemonComponent),
        },
        {
            path: 'add/pokemon',
            loadComponent: () => import('./add-pokemon/add-pokemon.component').then(module => module.AddPokemonComponent),
            title: 'Ajouter'
        },
        {
            path: 'pokemons',
            loadComponent: () => import('./list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent),
            title: 'Pokédex'
        },
        {
            path: 'pokemon/:id',
            loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent)
        },
    ]
}] as Routes;