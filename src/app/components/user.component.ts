import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p>email:{{email}}</p>
  <p>City:{{address.city}}</p>
  <p>Street:{{address.street}}</p>
  <p>State:{{address.state}}</p>
  <h3> Hobbies</h3>
  <p>{{hobbies}}</p>
  `,
})
export class UserComponent  {
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  constructor(){
    this.name = 'Jose M Varghese';
    this.email = 'jose@mail.com';
    this.address = {
      city:'Angmaly',
      street:'Mookkkannoor',
      state:'Kerala',
    };
    this.hobbies = ['afsdaf','sdafas','asdfsadf'];
  }
 }

 interface address{
   city:string;
   street:string;
   state:string;
 }
