import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URL = environment.API_VIDEOJUEGO
  constructor(private httClient: HttpClient) { }

  login(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = {
      headers: headers
    }
    return this.httClient.post(this.API_URL + 'usuario/login', JSON.stringify(data), options).pipe(map(res => res))

  }

}
