import { Cover } from "./Cover.js";
import { Label } from "./Label.js";
import { Node } from "./Node.js"
import { Sprite } from "./Sprite.js"

// // let cover = new Cover();
// // let label = new Label();
// // label.string = 20;
// // cover.addChild(label);
// // console.log(cover);
// // document.body.appendChild(cover.view);

const cards = [];
const nodes = [];

for (let index = 0; index < 20; index++) {
    let node = new Node();
    nodes.push(node);
}

function setPosition(nodes) {
    let index = 0;
    // this.nodes = nodes;
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 4; y++) {
            nodes[index].x = x*90;
            nodes[index].y = y*90;
            nodes[index].children[0].x = x*90;
            nodes[index].children[0].y = y*90;
            nodes[index].pushChild(index+1);
            console.log(nodes[index].children);
            index++;
        }
    }
}


nodes.forEach(node => {
    let cover = new Cover();
    node.addChild(cover);
    // node.initView(cover);
    let _onClickFunction = onClickFunction.bind(node);
    node.children[0].view.addEventListener("click",_onClickFunction);
});

let temp = [];

function onClickFunction() {
    console.log(this.index);
    temp.push(nodes[this.index]);
    console.log(temp);
    checkLogic(this.index);
    
}

function checkLogic(index) {
}

function setCover(nodes) {
    nodes.forEach(node => {
        document.body.appendChild(node.children[0].view);
    });
}


function startGame() {
    setPosition(nodes);
    setCover(nodes);
}

startGame();
console.log(nodes);