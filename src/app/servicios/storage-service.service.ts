import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(
    private router: Router
  ) { }

  setCurrentUser(session){
    localStorage.setItem('currentUser', JSON.stringify(session));
  }

  getCurrentUser(){
    return localStorage.getItem('currentUser');
  }

  logout(){
    localStorage.clear()
  }




}
