function runProgram(input) {
    input = input.trim().split("\n")
     //console.log(input)
     var testcases =  Number(input[0])
     //console.log(testcases)
     var line = 1;
     for(var i = 0; i < testcases; i++) {
    var[length,width] = input[line++].trim().split(" ").map(Number)
     //console.log([length,width])
     var mat = [];
    for(var j = 0; j < length; j++){
        
         mat.push(input[line++].trim().split(" ").map(Number))
        } 
      
    //console.log(mat)
    var top = 0;
    var left = 0;
    var right = length-1; 
    var bottom = length-1; 
    var count = 0;
    var size = length * length;
    var mat1 = [];
     while(count < size){
      for(var cl = left; cl <= right && count < size; cl++) {
         mat1.push(matrix[top][cl]);
         count++;
  }
      top++;
    
      for(var r = top; r <= bottom && count < size; r++){
        mat1.push(matrix[r][right]);
        count++;
      }
      right--;
  
      for(var cl = right; cl >= left && count < size; cl--){
        mat1.push(matrix[bottom][cl]);
        count++;
      }
      bottom--;
  
      for(var r = bottom; r >= top&& count < size; r--){
        mat1.push(matrix[r][left]);
        count++;
    }
    left++;
  }
  console.log(mat1.join(" "));
    
  }
  }
      if (process.env.USERNAME === "srini") {
        runProgram(`2
        3 4
        1 2 3 4
        5 6 7 8
        9 10 11 12
        4 3
        1 2 3
        4 5 6
        7 8 9
        10 11 12`);
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