import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 0;
  btnText : string = "Add An item";
  goalText : string = "First to do";
  goals =[];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goals.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem() {
    if(this.goalText){
      this.goals.push(this.goalText);
      this.goalText ="";
      this.itemCount = this.goals.length;
      this._data.changeGoal(this.goals);
    }
  }
  removeItem(index){
    this.goals.splice(index,1);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
}
