function runProgram(input) {
    input = input.trim().split("\n")
    var[a,b] = input[0].trim().split(" ").map(Number)
   // console.log(a,b)
    console.log(power(a,b))
  }
   function power(a,b) {
       if(b == 0) {
           return 1
       }
       return a*power(a,b-1)
   }
  
  if (process.env.USERNAME === "srini") {
    runProgram(`2 4`);
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