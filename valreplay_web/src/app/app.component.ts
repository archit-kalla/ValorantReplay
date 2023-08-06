import { Component } from '@angular/core';
import { MatchListComponent } from './match-list/match-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valreplay_web';
  username = '';

  update(value:string){
    this.username = value; 
  }
}
