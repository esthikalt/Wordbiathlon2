import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeRacerComponent } from './type-racer/type-racer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'typeracer', component: TypeRacerComponent },
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
