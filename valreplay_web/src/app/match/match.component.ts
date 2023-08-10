import { Component, Input } from '@angular/core';
import { matchInterface } from '../types/match-interface';

@Component({
  selector: 'match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {

  @Input() match: matchInterface = {} as matchInterface;





}
