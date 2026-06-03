var numIslands = function(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }
    let count=0
    let row=grid.length
    let col=grid[0].length
    for(let m=0;m<row;m++){
        for(let n=0;n<col;n++){
            if(grid[m][n]=='1'){
                count++
               dps(m,n)
            }
        }
    }
    function dps(r,c){
        if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] === '0') {
            return;
        }
        grid[r][c]='0'
        dps(r-1,c)
        dps(r,c-1)
        dps(r+1,c)
        dps(r,c+1)

    }
    return count
};

var orangesRotting = function(grid) {
   let queue=[] //记录腐烂橘子
   let time=0 //最小分钟数
   let freshCount=0
    
    for(let m=0;m<grid.length;m++){
        for(let n=0;n<grid[0].length;n++){
            if(grid[m][n]==1){
                freshCount++
            }else if(grid[m][n]==2){
                queue.push([m,n])
            }
        }
    }
    let direct=[[-1,0],[0,-1],[1,0],[0,1]]
    while(queue.length>0&&freshCount){
        let size=queue.length
        for(let i=0;i<size;i++){
            let [r,c]=queue.shift()//取出腐烂第一位
            for(let [dx,dy] of direct){
                let nextr=r+dx
                let nexty=c+dy
                if(nextr>=0&&nextr<grid.length&&nexty>=0&&nexty<grid[0].length&& grid[nextr][nexty]==1){
                    grid[nextr][nexty]=2
                    freshCount--
                    queue.push([nextr,nexty])
                }
            }
        }
        time++
    }
   return freshCount === 0 ? time : -1;
};