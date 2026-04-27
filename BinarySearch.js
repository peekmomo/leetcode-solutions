//搜索插入位置
var searchInsert = function(nums, target) {
    let index=null
    if(nums.length==0) return 0
    if(nums.length==1){
        return nums[0]>=target?0:1
    }
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>=target){
            return index=i
        }else if(nums[i]<target&& nums[i+1]>=target){
            return index=i+1
        }
    }
    return index!=null? index:nums.length
};