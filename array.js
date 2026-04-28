var maxSubArray = function(nums) {
  let dp = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp = Math.max(nums[i], dp + nums[i]);
        max = Math.max(max, dp);
    }

    return max;
};  