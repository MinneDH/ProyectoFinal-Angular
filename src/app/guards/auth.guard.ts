import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean>{
      return this.authService.isLoggedIn$;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>{
      return this.authService.isLoggedIn$;
  }
}
