function runProgram(input) {
    input = input.trim().split("\n")
    let N = Number(input[0])
   // console.log(N)
   let arr = []
   for(var i = 1; i <= N; i++){
     
      if(isPrime(i)) {
        arr.push(i);
      }
      
}
console.log(arr.join(" "))

}
function isPrime( n) {
      if(n == 1 || n == 0) return false;
   
      for(var i = 2; i < n; i++) {
        if(n % i == 0) return false;
      }
     
      return true;
}
    if (process.env.USERNAME === "srini") {
      runProgram(`50`);
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