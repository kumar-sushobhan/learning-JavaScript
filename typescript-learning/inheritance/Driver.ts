import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());
let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle(2, 6, 7, 9);
console.log(myRectangle.getInfo());
console.log("------------------------------------------");

let myShapes: Shape[] = [];
myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(myRectangle);
for (const tempShape of myShapes) {
  console.log(tempShape.getInfo());
}
