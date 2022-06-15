function runProgram(input) {
    input = input.trim().split("\n");
    let testcases = Number(input[0]);
    let res = [];
    let line = 1
    for (let i = 1; i <= testcases; i++) {
      let arr = input[line++].trim().split(" ");
     
    //  console.log(testcases,arr)
      let list = arr[0];
      let N = arr[1]
      if (list == "E") {
        res.push(N);
      }
      if (list == "D") {
        if (res.length == 0) {
          console.log("Empty");
        } else {
          let ans = res[0];
          res.shift();
          console.log(ans);
        }
      }
    }
  }
  
  
  if (process.env.USERNAME === "srini") {
    runProgram(`4
    E 2
    E 3
    D
    D`);
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
    





  
