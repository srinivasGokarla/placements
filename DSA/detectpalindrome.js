function runProgram(input) {
    var palindrome = "";
    for(var i = input.length - 1; i >= 0; i--){
        palindrome = palindrome + input[i];
    } if(input == palindrome){
            console.log("Yes")
        } else {
            console.log("No")
        
    }
  }
  
  
  if (process.env.USERNAME === "srini") {
    runProgram(`1221`);
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