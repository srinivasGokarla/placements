function runProgram(input) {
    input = input.trim().split("\n")
  let N = Number(input[0])
  let line = 1
  for(let i = 0; i < N; i++) {
      let size = Number(input[line++])
      let str = input[line++].trim().split("")
      detectPalII(str)
  }
      }
      function detectPalII(str){
        var obj = {}
        for(var i=0; i<str.length; i++){
            if(obj[str[i]] === undefined){
                obj[str[i]] = 1;
            }
            else{
                obj[str[i]] += 1
            }
        }
        var count = 0;
        for(var k in obj){
           // console.log(obj[k])
            if(obj[k] % 2 ===1){
                count++
            }
        }
        if(count > 1){
        console.log('No')
     }
     else{
         console.log('Yes')
     }
    }
    
    
    
    if (process.env.USERNAME === "srini") {
      runProgram(`3
      1
      a
      3
      aab
      4
      abbb`);
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