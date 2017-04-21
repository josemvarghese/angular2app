import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p>email:{{email}}</p>
  <p>City:{{address.city}}</p>
  <p>Street:{{address.street}}</p>
  <p>State:{{address.state}}</p>
  <button (click)="toggileHobbies()"> {{showHobbies?'Hide Hobbies':'Show Hobbies'}}</button>
  <div *ngIf="showHobbies">
  <h3> Hobbies</h3>
  <ul>
    <li *ngFor="let hobby of hobbies"> {{hobby}}</li>
  </ul>
  </div>
  `,
})
export class UserComponent  {
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;
  constructor(){
    this.name = 'Jose M Varghese';
    this.email = 'jose@mail.com';
    this.address = {
      city:'Angmaly',
      street:'Mookkkannoor',
      state:'Kerala',
    };
    this.hobbies = ['afsdaf','sdafas','asdfsadf'];
    this.showHobbies = false;
  }
  toggileHobbies() {
      if(this.showHobbies==false){
        this.showHobbies=true;
      }
      else{
        this.showHobbies=false;
      }
  }
 }

 interface address{
   city:string;
   street:string;
   state:string;
 }
