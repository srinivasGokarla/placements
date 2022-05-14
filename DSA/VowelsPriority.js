function runProgram(input){
    input=input.split("\n");
let N = Number(input[0])
let line = 1
for(let i= 0; i < N; i++) {
    let str = input[line++].trim().split("")
   // console.log(str)
   vowelsPriority(str)
}

}
function vowelsPriority(str) {
  let ans = []
  let res =[]
for(let i = 0; i <str.length; i++){
    if(str[i]=== "a" || str[i]=== "e" || str[i]=== "i" || str[i]=== "o" || str[i]=== "u") {
      ans.push(str[i])
    } else {
      res.push(str[i])
    }
}
ans.push(res.join(""))
console.log(ans.join(""))
}
 
if (process.env.USERNAME === "srini") {
    runProgram(`4
    eio
    masaischool
    ubcdefghioel
    rhythm`);
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