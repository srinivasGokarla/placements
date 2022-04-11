function binaryMatrix(N,M, matrix) {
    for(let i= 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][j] = 1
            } else if(matrix[i][j] === 1) {
                matrix[i][j] = 0
        }
    }
     
    }
    for(var k= 0; k < matrix.length; k++) {
        console.log(matrix[k].join(" "))
  }
  }
  