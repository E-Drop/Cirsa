import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService, Game } from '../../services/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game:Game = {
    name,
    type: 'type',
    imgpath: 'imgpath',
    imgbanner: 'imgbanner',
  };

  constructor(
    private _currentRoute: ActivatedRoute,
    private _gamesService: GamesService,
    ) {
    this._currentRoute.params.subscribe(params => {
      this.game = this._gamesService.getGame(params.id);
    });
  }

  ngOnInit(): void {
  }

}
