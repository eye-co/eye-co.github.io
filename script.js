// script code here
const box = document.getElementById("clusterCanvas")
const ctx = box.getContext("2d")
box.width = 500
box.height = 500
const buffer = 25
ctx.moveTo(0, 0)
// ctx.lineTo(200, 100)
// ctx.stroke()

const myPoints = []

function randomPointGenerator(ct) {
  for (let i = 0; i < ct; i++) {
    myPoints.push({
      x: Math.random() * (box.width - (buffer * 2)) + buffer,
      y: Math.random() * (box.height - (buffer * 2)) + buffer,
    })
  }
}

function drawPoints(points) {
  myPoints.forEach(point => {
    ctx?.beginPath()
    ctx?.arc(point.x, point.y, 5, 0, Math.PI * 2) // x, y, radius, start angle, end angle
    ctx.fillStyle = "black"
    ctx?.fill()
  })
}   

randomPointGenerator(100)
drawPoints(myPoints)
