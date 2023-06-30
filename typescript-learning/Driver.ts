import { CustomerAccessors } from "./CustomerAccessors";

let myCustomerAccessors = new CustomerAccessors("Hello1", "Hello2");
myCustomerAccessors.FirstName = "Sushobhan";
myCustomerAccessors.lastName = "Kumar";
console.log("First name : " + myCustomerAccessors.FirstName);
console.log("Last name : " + myCustomerAccessors.lastName);
