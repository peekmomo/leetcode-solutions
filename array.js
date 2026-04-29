var maxSubArray = function(nums) {
  let dp = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp = Math.max(nums[i], dp + nums[i]);
        max = Math.max(max, dp);
    }

    return max;
};  

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    result.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let last = result[result.length - 1];
        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            result.push(current);
        }
    }

    return result;
};



var rotate = function(nums, k) {
     let n = nums.length;
    k = k % n;
    const reverse = (arr, left, right) => {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    };
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};
