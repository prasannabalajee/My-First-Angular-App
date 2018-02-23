import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  incrementList=[];
  displayDetails=false;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.incrementList.push(this.incrementList.length+1);
    this.displayDetails=!this.displayDetails;
  }
  getColor(i){
    if(i>=5){
    return 'blue';
    }
    else{
      return 'transparent';
    }
  }
}
