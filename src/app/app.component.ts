import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <div>email:{{email}}</div>`,
})
export class AppComponent  {
  name = 'Jose M Varghese';
  email = 'jose@mail.com'
 }
