import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMatchList(username: string) {
    if (username !=""){
      return this.http.get('http://localhost:8000/matchlist/' + username)
    }
    return;
    
  }
}
