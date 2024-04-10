import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {InMemoryDataService} from './app/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        loadChildren: () => import('./app/pokemon/pokemon.routes')
    },
    {
        path: 'login',
        loadComponent: () => import("./app/login/login.component").then(module => module.LoginComponent),
        title: 'Login'
    },
    {
        path: '**',
        loadComponent: () => import("./app/page-not-found/page-not-found.component").then(module => module.PageNotFoundComponent),
        title: 'Page not found'
    }
];

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(BrowserModule, FormsModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })),
        provideRouter(routes)
    ]
})
    .catch(err => console.error(err));