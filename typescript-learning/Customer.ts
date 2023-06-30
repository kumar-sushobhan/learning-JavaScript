class Customer {
  private firstName: string;
  private lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // getter
  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  // setter
  public setFirstName(theFirstName: string): void {
    this.firstName = theFirstName;
  }

  public setLastName(theLastName: string): void {
    this.lastName = theLastName;
  }
}

let myCustomer = new Customer("Kumar", "Sushobhan");
myCustomer.setFirstName("Hello");
myCustomer.setLastName("World");
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
