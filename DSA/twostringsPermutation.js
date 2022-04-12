function runProgram(input){
    input =  input.trim().split("\n");
  let str = input[0].trim().split("").sort()
  let str1 = input[1].trim().split("").sort()
     console.log(twostrings(str,str1))
  
  
}
    function twostrings(str,str1) {
   if(str.length != str1.length){
       return 'No'
      
   }
    for(let i = 0; i <str.length; i++){
        if(str[i] != str1[i]){
            return "No"
            
        }
        }
    return "Yes"
  

  }
 
  
if (process.env.USERNAME === "srini") {
    runProgram(`amit
    mtia`);
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
  
  