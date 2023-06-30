import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCircle = new Circle(5, 8, 10);
let myRectangle = new Rectangle(10, 15, 20, 12);

let myShapes: Shape[] = [];
myShapes.push(myCircle);
myShapes.push(myRectangle);

for (const tempShape of myShapes) {
  console.log(tempShape.getInfo());
  console.log(tempShape.calculateArea());
  console.log();
}
