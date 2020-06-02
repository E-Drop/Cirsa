import { Component, OnInit } from '@angular/core';
import { GamesService, Game } from '../../services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];

  constructor(
    private _gamesService: GamesService,
    private _router: Router,
    ) {
     }

  ngOnInit(): void {
    this.games = this._gamesService.getGames();
    $(document).ready(() => {
      $('#classics').click(() => {
        $('ul').toggleClass('clasicas');
        $('#classics').toggleClass('active');
      });
      $('#tresd').click(() => {
        $('ul').toggleClass('tresde');
        $('#tresd').toggleClass('active');
      });
      $('#bar').click(() => {
        $('ul').toggleClass('tbar');
        $('#bar').toggleClass('active');
      });
      $('#video').click(() => {
        $('ul').toggleClass('tvideo');
        $('#video').toggleClass('active');
      });
      $('#todos').click(() => {
        $('ul').removeClass();
        $('#video').removeClass();
        $('#bar').removeClass();
        $('#tresd').removeClass();
        $('#classics').removeClass();
      });
    });
  }

  goToGame(id: number) {
    this._router.navigate(['/game', id]);
  }

}
