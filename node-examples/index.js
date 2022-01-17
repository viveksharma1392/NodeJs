var rect = require("./rectangle");

function solveRect(l, b){
    console.log("Solving for rcetangle l= "+l+" and b= "+b);
    if (l<=0 || b<=0){
        console.log("Rectangle dimentions should be greater than zero: l= "+l+" and b= "+b)
    }
    else{
        console.log("The area of the rectangle is "+ rect.area(l,b))
        console.log("The perimeter of the rectangle is "+ rect.perimeter(l,b))
    }
    console.log("")
}

solveRect(2,4);
solveRect(4,9);
solveRect(-5,0);
solveRect(10,2);

