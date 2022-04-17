
function runProgram(input){
    input = input.split("\n");
   let n = Number(input[0]);
   for(let i= 1;i <=n; i++) {
       if(i % 3 === 0 && i % 5 === 0) {
           console.log("FizzBuzz")
       } else if(i % 3 === 0) {
           console.log("Fizz")
       } else if(i % 5 === 0) {
           console.log("Buzz")
       } else {
           console.log(i)
       }
   }

}

if (process.env.USERNAME === "srini") {
    runProgram(`15`);
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