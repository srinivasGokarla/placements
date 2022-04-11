
function runProgram(input) {
    var arr = input.trim().split("");
    var mid = Math.floor(arr.length/2);
    //console.log(mid);
    var res = [];
     if(arr.length % 2 == 0) {
        for(var i = mid-1; i>= 0; i--) 
            res.push(arr[i])
           // console.log(res);
           
        for(var i = arr.length-1; i>= mid;i--) 
        res.push(arr[i])
      //  console.log(res);
        
    } else {
        for(var i = mid-1; i>= 0; i--) 
            res.push(arr[i])
           // console.log(res);
        
        res.push(arr[mid]);
        for(var i = arr.length-1; i > mid; i--) 
            res.push(arr[i])
            console.log(res);
           // console.log(res.join(""))
        
    }
}

if (process.env.USERNAME === "srini") {
  runProgram(`abcxyz`);
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

