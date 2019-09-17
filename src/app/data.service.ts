import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

/*
use this to inject service at root level but goals should be public in that case.
  @Injectable({providedIn: 'root'})
*/
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['initial goal', 'Other life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
