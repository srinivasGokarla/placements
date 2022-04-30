function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    //console.log(N)
    console.log(fibonaci(N))
}


function fibonaci(N){
  if(N === 0) 
  return 0;
   else if(N === 1)
  return 1;
  else 
  return fibonaci(N-1)+ fibonaci(N-2)
 }
 
     
     if (process.env.USERNAME === "srini") {
       runProgram(`5`);
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