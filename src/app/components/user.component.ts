import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p>email:{{email}}</p>
  <p>City:{{address.city}}</p>
  <p>Street:{{address.street}}</p>
  <p>State:{{address.state}}</p>`,
})
export class UserComponent  {
  name = 'Jose M Varghese';
  email = 'jose@mail.com',
  address = {
    city:'Angmaly',
    street:'Mookkkannoor',
    state:'Kerala',
  }
 }
