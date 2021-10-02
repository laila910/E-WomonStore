import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsnotloggedGuard implements CanActivate {
  constructor(private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!localStorage.getItem(`appToken`)) {
      this._router.navigateByUrl(``)
      return false
    }
    return true;
  }

}
