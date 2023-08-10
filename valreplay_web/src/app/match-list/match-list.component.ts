import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { MatchComponent } from '../match/match.component';
import { matchInterface } from '../types/match-interface';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {

  _username: string;

  @Input() set username(value: string) {
    this._username = value;
    this.getMatchList(value);
  };
  
  matchList: matchInterface[] = [];
  _matchList: matchInterface[] = [];

  // probably needs to be an api service -- done
  constructor(private apiservice: ApiService) { 
    this._username='';
  }

  private getMatchList(username: string) {
    let apiresp = this.apiservice.getMatchList(username);
    if (apiresp){
      apiresp.subscribe({
        next: (data) => this.setMatchList(data),
        error: (err) => console.log(err)
      });
    }
  }
  
  private setMatchList(data: any) { //need to create type class or something
    this.matchList = JSON.parse(data);
    for (let match of this.matchList){
      console.log(match);
      this._matchList.push(match);
    }
  }
}
