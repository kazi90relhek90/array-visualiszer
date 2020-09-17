//event listener
document.addEventListener("keypress", alterLook)

document.addEventListener("keypress", resetLook)

// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [200, 500, 350, 400, 580, 170, 225, 325, 100, 550, 250, 300, 600, 50, 275];


// Main Program Loop
requestAnimationFrame(draw);
//functions
function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }


    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}



    function resetLook(event) {
        if (event.keyCode == 114){

            myArray = [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];

        } else{}
       
    }

    function alterLook(event){
      let arraynum = 0
         
      if   (event.keyCode == 32) {
           for (arraynum ; arraynum <= 14 ; arraynum++){            
                //get random number between -5 and 5
              var randomNum = 5 + Math.random()* (-5 - 5)

              // give number to array number coresponding to it
             myArray[arraynum] += randomNum
             
             //constrain myArray
             myArray[0] = constrain( myArray[0] , 0 , 800 )
             myArray[1] = constrain( myArray[1] , 0 , 800 )
             myArray[2] = constrain( myArray[2] , 0 , 800 )
             myArray[3] = constrain( myArray[3] , 0 , 800 )
             myArray[4] = constrain( myArray[4] , 0 , 800 )
             myArray[5] = constrain( myArray[5] , 0 , 800 )
             myArray[6] = constrain( myArray[6] , 0 , 800 )
             myArray[7] = constrain( myArray[7] , 0 , 800 )
             myArray[8] = constrain( myArray[8] , 0 , 800 )
             myArray[9] = constrain( myArray[9] , 0 , 800 )
             myArray[10] = constrain( myArray[10] , 0 , 800 )
             myArray[11] = constrain( myArray[11] , 0 , 800 )
             myArray[12] = constrain( myArray[12] , 0 , 800 )
             myArray[13] = constrain( myArray[13] , 0 , 800 )
             myArray[14] = constrain( myArray[14] , 0 , 800 )
            }  
        } else {}
           
    }
     function constrain( n , low , high){
        if (n < low){
            return(low)
        } else if (n > high) {
            return(high)
        } else {
            return(n)
        }
    }