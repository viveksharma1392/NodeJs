var rect = require("./rectangle");

function solveRect(l, b){
    console.log("Solving for rcetangle l= "+l+" and b= "+b);
    rect(l, b, (err, rectangle)=>{
        if(err){
            console.log("Error: "+err);
        }
        else{
            console.log("The area of the rectangle with dimentions l= "+l+" b= "+b+" is "+rectangle.area());
            console.log("The perimeter of the rectangle with dimentions l= "+l+" b= "+b+" is "+rectangle.perimeter());
        }
    })
}

solveRect(2,4);
solveRect(4,9);
solveRect(-5,0);
solveRect(10,2);

