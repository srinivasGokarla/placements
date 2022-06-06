function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var single = Number(input[1])
    var arr = input[2].trim().split(" ").map(Number).sort((a,b)=> a-b)
  //  console.log(testcases,single, arr)
  let res = []
    for(var i = 0; i < arr.length; i++) {
       if(arr[i] !== arr[i+1] && arr[i] != arr[i-1]) { 
      res.push(arr[i])
       }
    
    }
    console.log(res.join(" "))
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      5
      1 2 1 3 4 4 5 2 3`);
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
    