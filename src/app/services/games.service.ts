import {Injectable} from '@angular/core';

@Injectable()
export class GamesService {

  private _games: Game[] = [
    {
      name: 'Fruit Xtreme',
      type: 'clasicas',
      imgpath: '/assets/clasica1.jpg',
      imgbanner: '/assets/clasica1ban.jpg',
    },
    {
      name: 'Fire & Steel',
      type: 'tresde',
      imgpath: '/assets/tresd1.jpg',
      imgbanner: '/assets/tresd1ban.jpg',
    },
    {
      name: 'Galaxia',
      type: 'tbar',
      imgpath: '/assets/tbar1.jpg',
      imgbanner: '/assets/tbar1ban.jpg',
    },
    {
      name: 'Imperial Fruits',
      type: 'clasicas',
      imgpath: '/assets/clasica2.jpg',
      imgbanner: '/assets/clasica2ban.jpg',
    },
    {
      name: 'Down the Pub',
      type: 'tresde',
      imgpath: '/assets/tresd2.jpg',
      imgbanner: '/assets/tresd2ban.jpg',
    },
    {
      name: 'GangSisters',
      type: 'tbar',
      imgpath: '/assets/tbar2.jpg',
      imgbanner: '/assets/tbar2ban.jpg',
    },
    {
      name: 'Mega Burning Wins',
      type: 'clasicas',
      imgpath: '/assets/clasica3.jpg',
      imgbanner: '/assets/clasica3ban.jpg',
    },
    {
      name: 'Easterns Delights',
      type: 'tresde',
      imgpath: '/assets/tresd3.jpg',
      imgbanner: '/assets/tresd3ban.jpg',
    },
    {
      name: 'On The Rocks',
      type: 'tbar',
      imgpath: '/assets/tbar3.jpg',
      imgbanner: '/assets/tbar3ban.jpg',
    },
    {
      name: 'Razor Shark',
      type: 'tvideo',
      imgpath: '/assets/tvideo.jpg',
      imgbanner: '/assets/tvideoban.jpg',
    },
  ];
  private _id: number;

  constructor() {
  }
  /**
   * getGames
   */
  public getGames() {
    return this._games;
  }
  public getGame(id: number) {
    return this._games[id];
  }
  public getGameLoading(){
    console.log(this._games[this._id]);
    return this._games[this._id];
  }
  public setId(id: number) {
    this._id = id;
  }
}

export interface Game {
  name: string;
  type: string;
  imgpath: string;
  imgbanner: string;
}
