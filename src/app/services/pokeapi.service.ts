import { Injectable } from '@angular/core';
import { PokemonList } from './pokemon.list';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokeapiService {

  private heroesUrl = 'http://pokeapi.co/api/v2/';  // URL to web api

  constructor(private http: Http) { }

  getPokemonsList(): Promise<PokemonList[]> {
    return this.http.get(this.heroesUrl + 'pokemon')
             .toPromise()
             .then(response => response.json().results as PokemonList[])
             .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
}
