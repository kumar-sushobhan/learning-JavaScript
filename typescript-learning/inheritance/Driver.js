"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const Shape_1 = require("./Shape");
let myShape = new Shape_1.Shape(10, 15);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(2, 6, 7, 9);
console.log(myRectangle.getInfo());
console.log("------------------------------------------");
let myShapes = [];
myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(myRectangle);
for (const tempShape of myShapes) {
    console.log(tempShape.getInfo());
}
