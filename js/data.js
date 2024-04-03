document.addEventListener('DOMContentLoaded', function() {
  // gets the canvas
  let canvas = document.querySelector('canvas');

  // sets canvas width and height
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // gets drawing tools
  let c = canvas.getContext('2d');

  // draws circle
  // you must begin the path first
  c.beginPath()

  // then 'outline' (invisibly) the object
  c.arc(100,100, 30, 0,Math.PI*2, false)

  // now stroke
  c.stroke()
 
  // for loop to create multiple circles
  // what a cool effect!
  for (let i = 0; i < 10; i++) {
    c.beginPath()
    c.arc(100+(i*2),100, 30, 0,Math.PI*2, false)

    // changes the color of the stroke
    c.strokeStyle = 'rgb(255,100,100)';
    c.stroke()
  }

  let colorArray = 
  ['rgb(255, 187, 97)', 'rgb(255, 67, 67)', 'rgb(255, 157, 52)', 'rgb(255, 99, 52)']
  
  // constructor function
  function createCircle() {
    this.x = Math.random() * innerWidth
    this.y = Math.random() * innerHeight
    this.r = Math.random() * 30
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    this.velx = Math.ceil(Math.random() * 7)
    this.draw = function() {
      c.beginPath()
      c.arc(this.x, this.y, this.r, 0, Math.PI*2, false)
      this.randSize = Math.random() * 5
      c.fillStyle = this.color
      c.fill()
      c.stroke()
      
    }
    this.update = function() {
      this.x += this.velx
      if ((this.x - this.r) > innerWidth) {
        (this.x = 0 - this.r - 10)
      }
      if ((mouse.x > this.x - 100) && (mouse.x < this.x + 100) && (mouse.y > this.y - 100) && (mouse.y < this.y + 100)) {
        if (this.r < 50) {
          this.r += this.randSize
        }
      } else if (this.r > 2) {
        this.r --
      }
    }
  }


  document.addEventListener('mousemove', function(event) {
    mouse.x = event.x
    mouse.y = event.y
  })

  let mouse = {
  }

  var testArray = []
  for (let i = 0; i < 120; i++) {
    testArray.push(new createCircle)
  }


  // creating moving circles
  function animate() {
    // this is a special function here, that lets us draw frames
    requestAnimationFrame(animate);

    // first clear the screen to give the frame a fresh canvas
    c.clearRect(0,0, innerWidth,innerHeight);

  
    for (let arr of testArray) {
      arr.draw()
      arr.update()
    }
  }
  // finally call the animate() function
  animate()
})
