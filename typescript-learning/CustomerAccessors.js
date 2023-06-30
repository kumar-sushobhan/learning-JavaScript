"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAccessors = void 0;
class CustomerAccessors {
    //   private _firstName: string;
    //   private _lastName: string;
    //   constructor(_firstName: string, _lastName: string) {
    //     this._firstName = _firstName;
    //     this._lastName = _lastName;
    //   }
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get FirstName() {
        return this._firstName;
    }
    set FirstName(theFirstName) {
        this._firstName = theFirstName;
    }
}
exports.CustomerAccessors = CustomerAccessors;
