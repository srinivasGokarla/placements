function runProgram(input) {
  input = input.trim().split("\n")
  let testcases = Number(input[0])
  let line = 1;
  for(let i = 0; i < testcases; i++){
      let N = Number(input[line++])
    //  console.log(N)
    binaryEquivalent(N,str="")
  }
}
function binaryEquivalent(N,str) {
  if (N < 1) {
    console.log(str)
    return
}
let ans = N % 2;
N = Math.floor(N / 2)
str = ans + str;
return  binaryEquivalent(N,str)
}

  if (process.env.USERNAME === "srini") {
    runProgram(`2
    15
    128`);
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