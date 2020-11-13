import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { Observable } from 'rxjs';
import {CreditCard} from './credit-card.model'

@Injectable({
  providedIn: 'root'
})
export class DtoService {

  constructor(private http: HttpClient) {}

  storeRecipes(data:CreditCard):Observable<any> {
    
    return this.http
      .post(
        `${environment.databaseURL}`+'/recipes.json',
        data
      )
  }

}
