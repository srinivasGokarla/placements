function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var N = Number(input[line++])
        //console.log(N)
        console.log(tribbonacci(N))
    }
     }
 
     function tribbonacci(N) {
         if(N == 0)
         return 0
         if(N == 1 || N == 2) 
         return 1 
         else 
         return tribbonacci(N-1)+tribbonacci(N-2)+ tribbonacci(N-3)
     }
     
     if (process.env.USERNAME === "srini") {
       runProgram(`1
       4`);
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