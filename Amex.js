var fs = require("fs");

let exec = (function(){
    // read the input
    var input = getInput();

    // write your code in main function and start dubuging
    main(input);
   
})();

// read the input from input.txt
function getInput() {
    var data = fs.readFileSync('./input/amex.txt', 'utf8');
    return data.toString();
}

//---------------------------------------------------------------------------------------

// Write your code here
function main(input) {
   
    let newInput = input.replace(/\r/,"").split("\n");
    
    let T = Number(newInput[0]);

    // console.log(T)
   
    
    for(let t=0; t<T; t++){
        let qIndex = 2*t +1;

        let Q = newInput[qIndex].split(" ");

        let N = Number(Q[0]);
        let P = Number(Q[1]);

        // console.log("N",N);
        // console.log("P",P);

        let arr = newInput[qIndex+1].split(" ")

        // console.log(arr);

        getSubArrAND(arr, N, P)

        
        
    }
}

function getSubArrAND(arr, N, P){

    let minK= Number(arr[0]);
    

    for(let i=0; i<N; i++){
      let  K = Number(arr[i])
        for(let j = i+1; j<N; j++){
           K = doAND(K,Number(arr[j]));
        }
        if(Math.abs(K-P) < minK){
            minK = Math.abs(K-P);
        }
        
    }

    console.log(minK)

}


function doAND(a,b){
    return a & b;
}





// sample input 

// 2
// 3 2
// 5 6 7
// 1 1
// 4

// output

// 2
// 3
