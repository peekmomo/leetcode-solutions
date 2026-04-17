var twoSum = function(nums, target) {
    const arr=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
               arr.push(i)
            arr.push(j)
            break
            }
        }
    }
    return arr 
};
//两数之和
twoSum([3,2,4])