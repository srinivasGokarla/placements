function runProgram(input) {
    input = input.trim().split("\n");
   let n = Number(input[0])
   let arr = input[1].trim().split(" ").map(Number)
   //console.log(n,arr)
   let sum1 = 0,sum2 = 0;
   for(let i = 0; i < Math.floor(n/2); i++) {
      sum1 = sum1 + arr[i]
   }
   for(let i = Math.floor(n/2)+1; i < n; i++) {
       sum2 = sum2 + arr[i]
   }if(sum1=== sum2) {
       console.log(Math.floor(n/2) + 1)
   } else {
       console.log(-1)
   }
}

  if (process.env.USERNAME === "srini") {
    runProgram(`5
    3 3 5 5 1`);
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