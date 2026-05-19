var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let rows = new Set();
    let cols = new Set();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};


var spiralOrder = function(matrix) {
        if (!matrix.length) return [];
    let res = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++;
        }
    }

    return res;
};

var rotate = function(matrix) {
    let n = matrix.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - 1 - i][j]] = 
            [matrix[n - 1 - i][j], matrix[i][j]];
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = 
            [matrix[j][i], matrix[i][j]];
        }
    }
};

var searchMatrix = function(matrix, target) {
    let m=matrix.length
    let n=matrix[0].length
    let row=0
    let col=n-1
    while(row<m&& col>=0){
       if(target==matrix[row][col]){
           return true
       }else if(target>matrix[row][col]){
           row++
       }else if(target<matrix[row][col]){
           col--
       }
    }
    return false
};
