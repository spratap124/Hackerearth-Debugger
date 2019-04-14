# Hackerearth-Debugger




// Write your code here
function main(input) {
   
    let newInput = input.replace(/\r/,"").split("\n");
    
   ## //write your input logic as per the problem statement.

    //first line of input contains number of testcases
    let T = Number(newInput[0]);
   
    for(let t=0; t<T; t++){
        let qIndex = 2*t + (t+1);

        //first line of each test case contains the lenth of the Stairs array 
        let Q = Number(newInput[qIndex]);
        
        //second line of each test case contains the Q space seperated numbers denoting the stair heights
        let Stairs = newInput[qIndex+1].split(" ");
        
        //third line of each test case contains the Q space seperated numbers denoting the jump required for each steps.
        let Steps = newInput[qIndex+2].split(" ");
      
        let output = playGameOfStairs(Q,Stairs,Steps);

        console.log(output);
    }
}