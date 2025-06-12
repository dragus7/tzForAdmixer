function validSolution(sudoku){
    let arr = Array(9);
    for(var t1 = 0; t1 < 3; t1++){
        for(var t2 = 0; t2 < 3; t2++){
            arr.fill(false);
            for(var i = 0; i < 3; i++){
                for(var j = 0; j < 3; j++){
                    const number = sudoku[t1 * 3 + i][t2 * 3 + j];
                    if(number === 0)return false;
                    if(arr[number-1])return false;
                    arr[number-1] = true;
                }
            }
            arr.fill(false);
        }
    }

    arr.fill(false);
        for(var i = 0; i < 9; i++){
            for(var j = 0; j < 9; j++){
                const number = sudoku[i][j];
                if(number === 0)return false;
                if(arr[number-1])return false;
                arr[number-1] = true;
            }
            arr.fill(false);
        }

        arr.fill(false);
        for(var i = 0; i < 9; i++){
            for(var j = 0; j < 9; j++){
                const number = sudoku[j][i];
                if(number === 0)return false;
                if(arr[number-1])return false;
                arr[number-1] = true;
            }
            arr.fill(false);
        }
    return true;
}


console.log(
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]));

console.log(
 validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
])
);
