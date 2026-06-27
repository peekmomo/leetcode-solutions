
var groupAnagrams = function(strs) {

    const map = {}

    for(let str of strs){
        let key = str.split('').sort().join('')
        if(!map[key]){
            map[key] = []
        }
        map[key].push(str)
    }
    return Object.values(map)

};

/**
 * @param {string} s
  * @return {number[]}
   */
    //首先就是判断当前的值中是否存在将要遍历的值，假如存在，那么就之间粘贴进去
    var partitionLabels = function(s) {
         const last = {};

    for (let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }

    const res = [];
    let start = 0; // 当前区间起点
    let end = 0;   // 当前区间终点

    for (let i = 0; i < s.length; i++) {

        // 当前区间至少要扩展到当前字符最后一次出现的位置
        end = Math.max(end, last[s[i]]);

        // 到达区间终点，可以切割
        if (i === end) {
            res.push(end - start + 1);
            start = i + 1;
        }
    }

    return res;
        }; 