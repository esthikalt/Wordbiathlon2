import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  isLoading = false;

  constructor(public authService: AuthService, private _router: Router){}

  onSignup(form:NgForm){
    if(form.invalid){
      return;
    }
   this.authService.createUser(form.value.email, form.value.password, form.value.name);
   this._router.navigate(["/"]);
  }
}
