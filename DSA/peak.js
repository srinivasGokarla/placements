function runProgram(input) {
    input = input.split('\n')
    for(var i=2; i<input.length; i+=2){
        var arr = input[i].split(" ").map(Number)
        console.log(peak(arr))
    }
    
   
}
function peak(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            return i
        }
    }
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
  