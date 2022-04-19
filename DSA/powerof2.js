function runProgram(input) {
    input  = input.trim().split("\n")
 let test = Number(input[0])
 let line = 1;
 for(let i= 0; i < test; i++) {
     let n = Number(input[line++])
     powerof2(n) 
 }
  }
  function powerof2(n) {
    while( n % 2 == 0){
  
        n = n/2;
       }
       
      if( n == 1 )
        console.log("True")
      
      else
       console.log("False")
  }
  

  if (process.env.USERNAME === "srini") {
    runProgram(`2
    2
    3`);
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
  