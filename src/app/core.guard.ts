import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import { Router } from "@angular/router";

@Injectable()
export class CoreGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.authenticated){return true;}
    console.log('access denied')

    this.router.navigate(['/apply']);
    return false;

  }
}
