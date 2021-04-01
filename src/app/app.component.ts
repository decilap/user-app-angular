import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { map, filter, tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageName;
  isHome = true;

  constructor(
    private location: Location,
    private router: Router,
    private titleService: Title
    ){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHome = event.url == '/' ? true : false;     
      });
  }

  onActivate(componentReference) {
      this.pageName = componentReference.pageName;
  }

  back(): void {
    this.location.back();
  }
}
