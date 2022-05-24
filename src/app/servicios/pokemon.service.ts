import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  API_URL = environment.API_BASE_URL;
  constructor(private httpClient: HttpClient) { }

  getAllPokemon():any{
		const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
		const options = {
			headers: headers
		}
		return this.httpClient.get(`${this.API_URL}pokemon?limit=10&offset=0`,options).pipe(map(res => res))
	}

  getUrl(url):any{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
		const options = {
			headers: headers
		}
		return this.httpClient.get(`${url}`,options).pipe(map(res => res))
  }

  getInfoPokemon(id:number):any{
	const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
	const options = {
		headers: headers
	}
	return this.httpClient.get(`${this.API_URL}pokemon-form/${id}/`,options).pipe(map(res => res))
  }
}
