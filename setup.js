let canvasBoard = document.querySelector("canvas");
let tool = canvasBoard.getContext("2d");
// console.log(tool);
let body = document.querySelector("body");
// canvas dimesnions
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;

let cTool = "pencil";
tool.strokeStyle = "red";