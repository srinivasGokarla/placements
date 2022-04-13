function runProgram(input) {
    var input = input.trim().split("\n");
      var testcases = input[0].split(" ")
        var target = testcases[1]
    var arr = input[1].trim().split(" ").map(Number)
    var skip = 0;
      var  count = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] > target) {
        skip++;
      } else {
        count++;
        
    } if( skip > 1) {
      break;
       
      }
    }
     console.log(count);
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`7 6
      4 3 7 6 7 2 2`);
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