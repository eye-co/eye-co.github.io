// script code here
const box = document.getElementById("clusterCanvas");
const ctx = box.getContext("2d");
box.width = 500;
box.height = 500;

ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();