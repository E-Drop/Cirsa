import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { GameComponent } from './components/game/game.component';
import { PriceComponent } from './components/price/price.component';

const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GameComponent},
  { path: 'price', component: PriceComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'games'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
