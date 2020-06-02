import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService, Game } from '../../../services/games.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

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

  }

  ngOnInit(): void {
    this.game = this._gamesService.getGameLoading();
  }

}
