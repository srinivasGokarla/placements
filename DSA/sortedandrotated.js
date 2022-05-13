function runProgram(input){
    input=input.split("\n");
   let n = Number(input[0])
   let arr = input[1].trim().split(" ").map(Number)
    let max = check(n,arr)
    console.log(binary(n,arr,max))
}

function check(n,arr){
    let lo = 0;
    let hi =n-1;
    while(lo <= hi){
        let mid = Math.floor(lo+((hi-lo)/2));
        if(arr[mid] > arr[mid+1]){
            return mid
        } else if(arr[mid] < arr[mid-1]){
            return mid-1
        } else if(arr[lo] <= arr[mid]){
            lo = mid+1
        } else if(arr[hi] >= arr[mid]){
            hi = mid-1
        }
    }
    return -1
}

function binary(n,arr,max){
    let lo = 0;
    let hi = n-1
    if(arr[lo] < arr[hi]){
        return "NO"
    }
    for (let i = 1; i <= max; i++) {
    if (arr[i] < arr[i-1]) {
      return "NO";
    }
  }
  for (let i = max+2; i < n; i++) {
    if (arr[i] < arr[i-1]) {
      return "NO";
    }
  }
  return "YES";

}
 
if (process.env.USERNAME === "srini") {
    runProgram(`6
    3 4 7 9 1 2`);
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