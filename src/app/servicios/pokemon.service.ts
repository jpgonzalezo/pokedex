import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  API_URL =environment.API_BASE_URL
  constructor(private httClient: HttpClient ) { }

  getAllPokemon(){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    const options = {
      headers:headers
    }
    return this.httClient.get(this.API_URL+'pokemon?limit=10&offset=0',options).pipe(map(res=>res))

  }


  getInfoPokemon(id){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    const options = {
      headers:headers
    }
    return this.httClient.get(this.API_URL+'pokemon-form/'+id,options).pipe(map(res=>res))

  }
}
