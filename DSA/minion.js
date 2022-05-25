
function runProgram(input){
    input = input.trim().split("\n")
    let N = Number(input[0])
    let arr = input[1].trim().split(" ").map(Number)
   // console.log(N,arr)
   Minion(N,arr)
     }
     function Minion(N,arr) {
         let count = 0;
         let temp = 0;
         j = 1
         for(let i = 0; i < N; i++) {
           if(arr[i] === arr[i+1]) {
               temp = arr[i+1];
               arr[i+1] = arr[arr.length-1] + j;
              j++
               count++

           }
         }
       
        console.log(count)
        console.log(arr.join(" "))
     }
     
     if (process.env.USERNAME === "srini") {
       runProgram(`4
       1 1 2 2`);
     } else {
       process.stdin.resume();
       process.stdin.setEncoding("ascii");
       let read = "";
       process.stdin.on("data", function (input) {
         read += input;
       });
       process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
       });
       process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
       });
     }