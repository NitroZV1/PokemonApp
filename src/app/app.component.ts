import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from "./auth.service";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [RouterOutlet, NgIf, RouterLink]
})
export class AppComponent implements OnInit {
    auth: AuthService;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.auth = this.authService;
    }
}
