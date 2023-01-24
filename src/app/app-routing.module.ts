import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeRacerComponent } from './type-racer/type-racer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SavedGamesComponent } from './saved-games/saved-games.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'typeracer', component: TypeRacerComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'savedgames', component: SavedGamesComponent},
  { path: 'leaderboard', component: LeaderboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
