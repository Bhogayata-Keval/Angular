import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  public temp: any;
  constructor() { }

  setValue(arg){
    this.temp=arg;
    }

  getValue(){
    return this.temp;
  }
}
