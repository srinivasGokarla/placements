function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    for(var i = 0; i < testcases; i++) {
        var curr = input[line++].trim().split(".")
        var update = input[line++].trim().split(".")
      // console.log(curr, update)
       buggy(curr,update)
    }
    }
    function buggy(curr,update) {
         if(curr[0] < update[0] || curr[0] === update[0] && curr[1] < update[1] || curr[0] == update[0] && curr[1] == update[1] && curr[2] < update[2] ) {
             console.log("True")
         } else {
             console.log("False")
         }
    }
    if (process.env.USERNAME === "srini") {
      runProgram(`3
      2.0.1
      1.9.8
      12.0.1
      12.10.0
      1.1.10
      1.1.12`);
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
    