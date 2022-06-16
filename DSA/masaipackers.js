function runProgram(input) {
    input = input.trim().split("\n")
    var[K,N] = input[0].trim().split(" ").map(Number)
    var arr =  input[1].trim().split(" ").map(Number)
   // console.log(K,N,arr)
    console.log(Masaipackers(K,0,arr,N))
  }
  function Masaipackers(a,b,c,d) {
      if(b== a)
      return 1;
      if(b > a)
      return 0; 
      let flag  = 0;
      for(var i = 0; i < d; i++) {
          flag = flag + Masaipackers(a,b+c[i],c,d)
      }
      return flag
  }
  
  
  if (process.env.USERNAME === "srini") {
    runProgram(`3 3
    1 2 3`);
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
  