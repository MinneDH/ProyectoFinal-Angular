import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProyectoApp';

  isHandset$:Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches),shareReplay());
  
  constructor( private breakpointObserver: BreakpointObserver, public authService:AuthService, private router:Router){}


  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}


