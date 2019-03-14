import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public parentData:any;
  public temp:any;
  public message = "";
  title = 'Keval';
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  onMonthClick=(month)=>{
    this.temp=month;
  }

  onClickSubmit(data){
    alert(data.name);
    alert(data.contactno);
    alert(data.age);
  }
}


