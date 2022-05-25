
function runProgram(input){
    input = input.trim().split("\n")
    let test = Number(input[0])
    let line = 1;
    for(let i = 0; i < test; i++) {
        let  N = Number(input[line++])
       
      //  console.log(test,N)
       if(quadra(N) === "yes") {
           console.log(1)
       } else {
           console.log(0)
       }
    }
  
     }
     function quadra(N) {
let arr = [0,1,2,3,4,5,6,7,8,9]
for(let i= 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++) {
        if(arr[i]**4 + arr[j]**4 === N) {
            return "yes"
        } 
        
    }
}
     }
     
     if (process.env.USERNAME === "srini") {
       runProgram(`2
       55
       97`);
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