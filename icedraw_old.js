let shapeX = 100
let shapeY = 100
let shapeSize = 1
// let growthRate = 0.5
// let popped = false

let bubbleX
let bubbleY
let bubbleSize = 100
let bubbleImage

let timer = 0
let increment = 1

function preload(){
  bubbleImage = loadImage("bubble.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)

  bubbleX = windowWidth/2
  bubbleY - windowHeight/2
 

}

function draw() {
   // background(54, 158, 255)

   timer = timer + increment

   background(119, 162, 238)
   noFill()
   circle(bubbleX, bubbleY, bubbleSize)
   bubbleSize = bubbleSize + 1
   image(bubbleImage, 50, timer, 100, 100)


  //  circle(shapeX, shapeY, shapeSize)
  //  shapeX = shapeX + 1
  //  shapeY = shapeY + 1
   
   if (!popped) {
    shapeSize+= growthRate;
  
   }

  //  fill(255)
  //  noFill()
  //  circle(shapeX, shapeY, shapeSize)
   

   fill(0, 0, 255)
   stroke(255)
   circle(30, 30, 30)

    fill(0, 0, 255, 25)
   stroke(255)
   circle(60, 60, 60)
   
   fill(0, 0, 255, 60)
   stroke(255, 255, 255)

    fill(255, 100, 255, 60)
   stroke(255, 255, 255)
   circle(120, 180, 60)

    fill(0, 0, 255, 60)
   stroke(255, 255, 255)
   circle(60, 300, 100)
   
   fill(0, 0, 255, 60)
   stroke(255, 255, 255)
   circle(90, 400, 20)

    fill(0, 255, 255, 60)
   stroke(255, 255, 255)
   circle(20, 350, 50)

   fill(0, 0, 255, 60)
   stroke(255, 255, 255)
   circle(70, 500, 80)

   fill(200)
   stroke(255, 255, 255, 0)
   triangle(600, 600, 500, 700, 800, 700), triangle(100, 700, 300, 800, 600, 600)

// stem
    fill(121, 255, 54)
  stroke(121, 255, 54)
  rect(299, 320, 3, 300)

// flower petals
  fill(255, 54, 191)
  stroke
  circle(300, 300, 20)

  fill (255, 141, 54)
  stroke
  circle(310, 310, 20)

   fill(255, 54, 191)
  stroke
  circle(310, 320, 20)

  fill
  stroke
  circle(290, 320, 20)

   fill(255, 141, 54)
  stroke
  circle(290, 310, 20)
  
 





  // background(24, 214, 217)
  // fill(255, 0, 0, 10)
  // stroke(255, 128, 217)

  // fill(255, 173, 231)
  // rect(0, 0, 200, 200)

  // fill(0, 0, 255, 10)
  // circle(500, 200, 150)
  // line(windowWidth/2, windowHeight/2, mouseX, mouseY)

  // fill(192, 222, 0, 10)
  // triangle(100, 100, mouseX, mouseY, 400, 500)
}

 function mousePressed(){
  bubbleSize = 0

 }
