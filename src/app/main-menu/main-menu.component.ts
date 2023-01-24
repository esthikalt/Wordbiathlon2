import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";


@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit, OnDestroy{
  userIsAuthenticated = false;
  private authListenerSubs!: Subscription;
  constructor(private authService: AuthService, private _router: Router) {}


  ngOnInit(){
    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      console.log("subResponse: " + isAuthenticated);
      console.log("lokale Variable: " + this.userIsAuthenticated);
    });
    console.log("lokale außerhalb vom sub: " + this.userIsAuthenticated);
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
