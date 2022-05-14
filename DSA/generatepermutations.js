function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
    Permutation(N,arr,0)
    arr2.sort((a,b) => (a-b))
    var str = "";
    for(var i = 0; i < arr2.length; i++){
        console.log(arr2[i].toString().split("").join(" "))
    }
  }
  
  var arr2 = []
  
  function Permutation(N,arr,cur) {
  if(cur == N) {
     arr2.push(+arr.join(""))
      return
  }
  for(var i = cur; i < N; i++) {
      swap(arr,i,cur)
      Permutation(N,arr,cur+1)
      swap(arr,i,cur);
  }
  }
  function swap(arr,f,s) {
      temp = arr[f]
      arr[f] = arr[s]
      arr[s] = temp
  }
  
  if (process.env.USERNAME === "srini") {
    runProgram(`3
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