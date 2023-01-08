// define variable matrix to an array 
let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]
function solution(matrix) {
    for(var r=0,j=0;j<matrix[0].length;j++){
        for(var i=0;i<matrix.length;i++){
          if(matrix[i][j]===0) break
          else r+=matrix[i][j]
        }
    }
    return r
  }
  