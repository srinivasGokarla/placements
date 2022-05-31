function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1;
    var arr1 = [];
    for(var i = 0; i < testcases; i++) {
        var arr = input[line++].trim().split(" ")
     
        
    if(arr[0] == 'E'){
        arr1.push(arr[1])
        console.log(arr1.length);
  
    } else if(arr[0] == "D" &&  arr1.length == 0){
        console.log("-1", arr1.length);
    } else if(arr[0] == "D"){
        console.log(arr1.shift(), arr1.length);
    }
    }
  }
  
  if (process.env.USERNAME === "srini") {
    runProgram(`5
    E 2
    D
    D
    E 3
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
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  