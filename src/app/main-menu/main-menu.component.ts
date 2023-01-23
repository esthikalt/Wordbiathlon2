import { Component } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";


@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent {
  userIsAuthenticated = false;
  private authListenerSubs!: Subscription;
  constructor(private authService: AuthService, private _router: Router) {}


  ngOnInit(){
    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }

}
