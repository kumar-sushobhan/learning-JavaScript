"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerAccessors_1 = require("./CustomerAccessors");
let myCustomerAccessors = new CustomerAccessors_1.CustomerAccessors("Hello1", "Hello2");
myCustomerAccessors.FirstName = "Sushobhan";
myCustomerAccessors.lastName = "Kumar";
console.log("First name : " + myCustomerAccessors.FirstName);
console.log("Last name : " + myCustomerAccessors.lastName);
