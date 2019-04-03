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
  getWorks() {
    return this.http.get('https://us-central1-nanodesign-1d2cb.cloudfunctions.net/get_workstation');
  }

  postGames(games, works, requirement) {
    return this.http.post('https://us-central1-nanodesign-1d2cb.cloudfunctions.net/postResult',
    {games: games, workstation: works, richlvl: [requirement]});
  }

  postMsg(name, email, msg) {
    return this.http.post('https://us-central1-nanodesign-1d2cb.cloudfunctions.net/store_info',
    {info: [name, email, msg]});
  }
}
