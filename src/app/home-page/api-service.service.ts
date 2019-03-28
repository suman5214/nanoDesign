import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get('https://us-central1-nanodesign-1d2cb.cloudfunctions.net/get_games');
  }

  postGames() {
    return this.http.post('https://us-central1-nanodesign-1d2cb.cloudfunctions.net/postResult',
    {games: ['DOTA2', 'ARK', 'LOL']});
  }
}
