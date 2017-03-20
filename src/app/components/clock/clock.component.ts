import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  private date;
  private testDate;
  private newDate?;
  private diffDate?;
  private counter = true;

  constructor() { 

  }

  ngOnInit() {

    this.testDate = new Date(2017,2,6,14,0,0);

    this.date =  new Date(); 
    
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }

  onClick(){

    if(this.counter){
      this.newDate = this.date;
      this.counter = false;
    }else{
      this.diffDate = new Date();

      this.diffDate.setHours((this.date.getHours() - this.newDate.getHours()));


      this.counter = true;
    }

    
    
  }



}
