import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { GamesService } from './services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
    title = 'cirsa';
    id: number;

  public showOverlay = true;
  private _previousUrl: string;

  constructor(private router: Router, private _gamesService: GamesService) {

    router.events.subscribe((event: any) => {
      this.navigationInterceptor(event);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      if (this.router.url.includes('/game/') && this._previousUrl !== event.url && this._previousUrl !== undefined) {
        this._gamesService.setId(this.id = parseInt(this.router.url.substring(this.router.url.lastIndexOf('/') + 1)));
        setTimeout(() => {
          this.showOverlay = false;
        }, 5000);
      } else {
        this.showOverlay = false;
      }
      this._previousUrl = event.url;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      console.log('cancel');
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      console.log('error');
      this.showOverlay = false;
    }
  }
}
