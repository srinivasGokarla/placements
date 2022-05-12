function runProgram(input) {
    input = input.split("\n");
    var l = Number(input[0]);
    var data = input[1].split(" ").map(Number);
    mergeSorting(data, 0, l - 1);
    console.log(data.join(" "));
  }
  
  function mergeSorting(data, l, a) {
  
    if (l < a) {
  
      var m = Math.floor((l + a) / 2);
  
      mergeSorting(data, l, m);
      mergeSorting(data, m + 1, a);
  
      merge(data, l, m, a);
  
    }
  }
  
  function merge(data, l, m, r) {
  
    var a1 = m - l + 1;
    var a2 = r - m;
  
    var L = [];
    var R = [];
  
    for (var i = 0; i < a1; ++i) {
      L.push(data[l + i]);
    }
    for (var j = 0; j < a2; ++j) {
      R.push(data[m + 1 + j]);
    }
    var i = 0;
    var j = 0;
    var k = l;
    while (i < a1 && j < a2) {
      if (L[i] <= R[j]) {
        data[k] = L[i];
        i++;
      }
      else {
        data[k] = R[j];
        j++;
      }
      k++;
    }
  
    while (i < a1) {
      data[k] = L[i];
      i++;
      k++;
    }
  
    while (j < a2) {
      data[k] = R[j];
      j++;
      k++;
    }
  }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`5
      2 3 1 4 5`);
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
    