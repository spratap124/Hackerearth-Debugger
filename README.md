# Hackerearth-Debugger

* This application helps you to solve the HackerEarth coding problems based on NodeJS.
    you can easily debug the application by running the program in your local machine.

* Put the input file(*.txt) in input folder and keep the input test cases in that file.

* mention your input file name in getInput() method

        // read the input from input.txt
        function getInput() {
            var data = fs.readFileSync('./input/thoughtWorks.txt', 'utf8');
            return data.toString();
        }

* Run your code using below command:
    
    Ex:
    node thougthWorks.js

* See the output in console. 


##  Write your code here

    function main(input) {
    
        let newInput = input.replace(/\r/,"").split("\n");
        
        * write your input logic as per the problem statement.

        //first line of input contains number of test cases
        let T = Number(newInput[0]);
    
        for(let t=0; t<T; t++){
            let qIndex = 2*t + (t+1);

            //first line of each test case contains the length of the Stairs array 
            let Q = Number(newInput[qIndex]);
            
            //second line of each test case contains the Q space seperated numbers denoting the stair heights
            let Stairs = newInput[qIndex+1].split(" ");
            
            //third line of each test case contains the Q space seperated numbers denoting the jump required for each steps.
            let Steps = newInput[qIndex+2].split(" ");
        
            let output = playGameOfStairs(Q,Stairs,Steps);

            console.log(output);
        }
    }
