function runProgram(input) {
    input = input.trim().split("\n")
let arr = input[0].trim().split().map(Number)
let arr1 = input[1].trim().split().map(Number)
 for(let i= 0; i < arr.length; i++) {
     if(arr[0] > arr1[0]) {
         console.log("New Zealand")
     } else if(arr[0] < arr1[0]) {
        console.log("England")
     } else if(arr[0] === arr1[0] && arr[1] > arr1[1]) {
        console.log("New Zealand")
     } else if(arr[0] === arr1[0] && arr[1] < arr1[1]) {
        console.log("England")
     } else if(arr[0] === arr1[0] && arr[1]  === arr1[1] && arr[2] > arr1[2]) {
        console.log("New Zealand")
     } else if(arr[0] === arr1[0] && arr[1]  === arr1[1] && arr[2] < arr1[2]) {
        console.log("New Zealand")
     }
 }
 }
if (process.env.USERNAME === "srini") {
  runProgram(`241 15 21
  241 15 26`);
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