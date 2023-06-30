export class CustomerAccessors {
  //   private _firstName: string;
  //   private _lastName: string;

  //   constructor(_firstName: string, _lastName: string) {
  //     this._firstName = _firstName;
  //     this._lastName = _lastName;
  //   }

  constructor(private _firstName: string, private _lastName: string) {}

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  get FirstName(): string {
    return this._firstName;
  }

  set FirstName(theFirstName: string) {
    this._firstName = theFirstName;
  }
}
