"use strict";
class Customer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // getter
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    // setter
    setFirstName(theFirstName) {
        this.firstName = theFirstName;
    }
    setLastName(theLastName) {
        this.lastName = theLastName;
    }
}
let myCustomer = new Customer("Kumar", "Sushobhan");
myCustomer.setFirstName("Hello");
myCustomer.setLastName("World");
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
