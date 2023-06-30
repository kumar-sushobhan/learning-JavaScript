"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 8, 10);
let myRectangle = new Rectangle_1.Rectangle(10, 15, 20, 12);
let myShapes = [];
myShapes.push(myCircle);
myShapes.push(myRectangle);
for (const tempShape of myShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
