import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p>email:{{email}}</p>
  <p>City:{{address.city}}</p>
  <p>Street:{{address.street}}</p>
  <p>State:{{address.state}}</p>
  <button (click)="toggileHobbies()"> {{showHobbies?'Hide Hobbies':'Show Hobbies'}}</button>
  <br/>
  <form (submit)="addHobby(hobby.value)" >
    <label>Add hobby</label>
    <input type="text" #hobby/>
  </form>
  <br/>
  <div *ngIf="showHobbies">
  <h3> Hobbies</h3>
  <ul>
    <li *ngFor="let hobby of hobbies;let i=index"> {{hobby}}
    <button (click)='deleteHobby(i)'>X</button>
    </li>
  </ul>

  </div>
  <br/>
  <h3> Edit User </h3>
  <form>
  <label>Name:</label>
  <input type='text'  name="name" [(ngModel)]="name"/><br/>
  <label>Email:</label>
  <input type='email'  name="email" [(ngModel)]="email"/><br/>
  <label>City:</label>
  <input type='text'  name="city" [(ngModel)]="address.city"/><br/>
  <label>Street:</label>
  <input type='text'  name="street" [(ngModel)]="address.street"/><br/>
  <label>State:</label>
  <input type='text'  name="state" [(ngModel)]="address.state"/><br/>
  </form>
  `,
})
export class UserComponent  {
  name:string;
  email:string;
  adhobby:string;
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
  deleteHobby(i:number){
    console.log(i);
    this.hobbies.splice(i,1);
  }
  addHobby(hobby:any){
    this.hobbies.push(hobby);

  }
 }

 interface address{
   city:string;
   street:string;
   state:string;
 }
