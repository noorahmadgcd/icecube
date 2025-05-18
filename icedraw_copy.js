let bubbleX
let bubbleY
let bubbleSize = 100
let bubbleImage

let timer = 0
let increment = 1

let sec

function preload(){
  bubbleImage = loadImage("bubble.png")
}

function setup() {
  bubbleX = windowWidth/2
  bubbleY - windowHeight/2
  createCanvas(windowWidth, windowHeight)
  // background(0)
}

function draw() {
   timer = timer + increment

   // background(119, 162, 238)
   image(bubbleImage, 200, timer, 200, 200)

   s = second()
   textSize(50)
   text(s, 100, 100)

   circle(300, 300, s * 5)
}

 function mousePressed(){
  bubbleSize = 0

 }
