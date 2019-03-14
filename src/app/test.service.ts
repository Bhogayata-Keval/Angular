import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name":"Keval", "age":22},
      {"id":2, "name":"Kunal", "age":23},
      {"id":3, "name":"HV", "age":24},
      {"id":4, "name":"Ishan", "age":25},
    ];
  }
}
