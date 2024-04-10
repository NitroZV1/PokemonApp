import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PokemonModule} from './pokemon/pokemon.module';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {LoginComponent} from "./login/login.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        PokemonModule,
        RouterOutlet,
        AppRoutingModule,
        PageNotFoundComponent,
        LoginComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }