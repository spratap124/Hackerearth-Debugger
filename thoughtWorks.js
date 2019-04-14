var fs = require("fs");

let exec = (function(){
    // read the input
    var input = getInput();

    // write your code in main function and start dubuging
    main(input);
   
})();

// read the input from input.txt
function getInput() {
    var data = fs.readFileSync('./input/thoughtWorks.txt', 'utf8');
    return data.toString();
}

//---------------------------------------------------------------------------------------

// Write your code here
function main(input) {
   
    let newInput = input.replace(/\r/,"").split("\n");
    
    let T = Number(newInput[0]);
   
    
    for(let t=0; t<T; t++){
        let qIndex = 2*t + (t+1);
        let Q = Number(newInput[qIndex]);
        
        let Stairs = newInput[qIndex+1].split(" ");
       
        let Steps = newInput[qIndex+2].split(" ");
      
        let output = playGameOfStairs(Q,Stairs,Steps);

        console.log(output);
    }
}



function playGameOfStairs(Q,Stairs,Steps){
    let output = "";
    let strLen = Stairs.length;
    // let stpLen = Steps.length;


    for(let i=0; i < strLen; i++){
        let block = Number(Stairs[i]);

        for(let j = 0; j<i; j++){
            //place the block
            if(block <= Number(Stairs[j])){
                Stairs.splice(j,0,block);
                Stairs.splice(i+1,1);
                break;
            }
        }
       
        //ask to jump 
        let numberOfStepsToJump = Number(Steps[i]);
        let currentStandingPoint = Stairs[numberOfStepsToJump - 1];

        if(i != strLen - 1)
            output += currentStandingPoint+" ";
        else
        output += currentStandingPoint;
    }
    return output;
}

/*

// sample input 

1
6
3 7 9 10 1 2
1 1 3 2 5 1

//sample output
3 3 9 7 10 1

*/
