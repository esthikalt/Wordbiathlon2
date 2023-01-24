import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";


@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit, OnDestroy {

  constructor(private _authService: AuthService) {}
  userIsAuthenticated:boolean;
  private authListenerSubs: Subscription;



  ngOnInit(){
    this.userIsAuthenticated = this._authService.getIsAuth();
    this.authListenerSubs = this._authService
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
