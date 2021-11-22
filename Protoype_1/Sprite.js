import {Node} from "./Node.js";

let array = ["url(./Images/circle.png)",
    "url(./Images/diamond.png)",
    "url(./Images/halfsquare.png)",
    "url(./Images/heart.png)",
    "url(./Images/rectangle.png)",
    "url(./Images/shape.png)",
    "url(./Images/sixstar.png)",
    "url(./Images/square.png)",
    "url(./Images/star.png)",
    "url(./Images/triangle.png)",
    "url(./Images/triangle.png)",
    "url(./Images/circle.png)",
    "url(./Images/diamond.png)",
    "url(./Images/halfsquare.png)",
    "url(./Images/heart.png)",
    "url(./Images/rectangle.png)",
    "url(./Images/shape.png)",
    "url(./Images/sixstar.png)",
    "url(./Images/square.png)",
    "url(./Images/star.png)"];
const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

export class Sprite extends Node {
    initView() {
        this.view = document.createElement('img');
    }

    setImage(src){
        this.view.src = src;
    }
}