function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    var str = input[1].trim().split("")
    
  //console.log(str,N)
  subsequence(str,0,[],N)
  }
  function subsequence(str,cur,out,N) {
      if(N == cur) {
           console.log(out.join(""))
          return;
      }
      if(out.length != 0) {
           console.log(out.join(""))
          
      }
     
      
      for(let i = cur; i < N; i++) {
          out.push(str[i])
           subsequence(str,i+1,out,N)
           out.pop()
           
      }
      
      
      
  }
  
  
  if (process.env.USERNAME === "srini") {
    runProgram(`4
    abcd`);
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