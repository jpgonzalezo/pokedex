import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { StorageService } from './storage-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizatedService  implements CanActivate{

  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  canActivate(){
    let currentUser = JSON.parse(this.storageService.getCurrentUser())
    if (currentUser) {
      return true;
    }
    this.router.navigate(['/inicio']);
    return false;
  }
}
