"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.name = 'Jose M Varghese';
        this.email = 'jose@mail.com';
        this.address = {
            city: 'Angmaly',
            street: 'Mookkkannoor',
            state: 'Kerala',
        };
        this.hobbies = ['afsdaf', 'sdafas', 'asdfsadf'];
        this.showHobbies = false;
    }
    UserComponent.prototype.toggileHobbies = function () {
        if (this.showHobbies == false) {
            this.showHobbies = true;
        }
        else {
            this.showHobbies = false;
        }
    };
    UserComponent.prototype.deleteHobby = function (i) {
        console.log(i);
        this.hobbies.splice(i, 1);
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "<h1>Hello {{name}}</h1>\n  <p>email:{{email}}</p>\n  <p>City:{{address.city}}</p>\n  <p>Street:{{address.street}}</p>\n  <p>State:{{address.state}}</p>\n  <button (click)=\"toggileHobbies()\"> {{showHobbies?'Hide Hobbies':'Show Hobbies'}}</button>\n  <br/>\n  <form (submit)=\"addHobby(hobby.value)\" >\n    <label>Add hobby</label>\n    <input type=\"text\" #hobby/>\n  </form>\n  <br/>\n  <div *ngIf=\"showHobbies\">\n  <h3> Hobbies</h3>\n  <ul>\n    <li *ngFor=\"let hobby of hobbies;let i=index\"> {{hobby}}\n    <button (click)='deleteHobby(i)'>X</button>\n    </li>\n  </ul>\n\n  </div>\n  <br/>\n  <h3> Edit User </h3>\n  <form>\n  <label>Name:</label>\n  <input type='text'  name=\"name\" [(ngModel)]=\"name\"/><br/>\n  <label>Email:</label>\n  <input type='email'  name=\"email\" [(ngModel)]=\"email\"/><br/>\n  <label>City:</label>\n  <input type='text'  name=\"city\" [(ngModel)]=\"address.city\"/><br/>\n  <label>Street:</label>\n  <input type='text'  name=\"street\" [(ngModel)]=\"address.street\"/><br/>\n  <label>State:</label>\n  <input type='text'  name=\"state\" [(ngModel)]=\"address.state\"/><br/>\n  </form>\n  ",
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map