//中序遍历


//最大深度
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function arrayToTree(arr) {
    if (arr.length === 0) return null;

    let root = new TreeNode(arr[0]);
    let nodes = [root]; 
    let i = 1;

    for (let node of nodes) {
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            nodes.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            nodes.push(node.right);
        }
        i++;
    }

    return root;
}

//二叉树中序遍历
var inorderTraversal = function(root) {
    const result = [];  
    function inorder(node) {
        if (node === null) return;  
        inorder(node.left);  
        result.push(node.val);  
        inorder(node.right);  
    }
    inorder(root);  
    return result;  
};

//对称二叉树
var isSymmetric = function(root) {
    function isSimple(left,right){
         if (left === null && right === null) return true;      
        if (left === null || right === null) return false;     
        if (left.val !== right.val) return false; 
        let outSide=isSimple(left.left,right.right)
        let inSide=isSimple(left.right,right.left)
        return outSide&&inSide
    }
    if(root==null) return true
    let isTrue=isSimple(root.left,root.right)
    return isTrue
};

//最长直径
var diameterOfBinaryTree = function(root) {
   if(root==null){
    return 0
   }
   let getdeep=deepNode(root.left)+deepNode(root.right)
   return Math.max(getdeep,diameterOfBinaryTree(root.left),diameterOfBinaryTree(root.right))
};
function deepNode(node){
    if(node==null) return 0
    let left=deepNode(node.left)
    let right=deepNode(node.right)
    return Math.max(left,right)+1

}

//有序数组转换为二叉搜索树
var sortedArrayToBST = function(nums) {
  if(nums.length==0) return  null
  let midnum=Math.floor(nums.length/2)
  const root=new TreeNode(nums[midnum])
  root.left=sortedArrayToBST(nums.slice(0, midnum))
  root.right=sortedArrayToBST(nums.slice(midnum+1))
  return root
};

//二叉树搜索第K小
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 //思路：对二叉树进行遍历，用一个数组将所有二叉树中元素都进行放在数组中
 //
var kthSmallest = function(root, k) {
    if(!root) return
    const arr=deepNode(root)
    arr.sort((a, b) => a - b)
    return arr[k-1]
    
};
function deepNode(node){
    //进行判断 假如节点为空，直接return
    if(!node){
        return []
    }
    //节点存在，将这个节点返回，并且递归调用这个节点的left和right
    
    return [node.val,...deepNode(node.left),
    ...deepNode(node.right)]
    
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 //思路，同层进行遍历，判断规则
  //先判断右节点的右节点，在判断右节点的左节点 左节点的右节点 左节点的左节点
var rightSideView = function(root) {
    let queue=[root]
   
    const arr=[]
    if(!root) return []
    //先判断层级数，然后进行遍历，先遍历右节点，再遍历左节点
    //当i=0的时候代表这个是right或者唯一的一个节点
    while(queue.length){
        let treeSize=queue.length
        for(let i=0;i<treeSize;i++){
            let node=queue.shift()
            if(i === 0){
                arr.push(node.val)
            }
           if(node.right) queue.push(node.right)
           if(node.left) queue.push(node.left)
            
        }
    }
    return arr
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 //先序遍历 中序遍历
var buildTree = function(preorder, inorder) {
    if(preorder.length==1) return new TreeNode(preorder[0])
    if(preorder.length===0) return null
    //先序遍历：根->左->右
    //中序遍历:左->根->右
    let root=new TreeNode(preorder[0])
    //找到根节点在中序遍历的位置，左边是左子树，右边是右子树
    let inorderIndex=inorder.indexOf(preorder[0])
    //找出左子树的长度，右子树的长度
    let leftLength=inorderIndex
    let rightLength=inorder.length-inorderIndex-1
    //切割出来先序\中序遍历里面的左子树，右子树
    let p_leftarr=preorder.slice(1,1+leftLength)
    let p_rightarr=preorder.slice(1+leftLength)
    let i_leftarr=inorder.slice(0,inorderIndex)
    let i_rightarr=inorder.slice(inorderIndex+1)
    root.left=buildTree(p_leftarr,i_leftarr)
    root.right=buildTree(p_rightarr,i_rightarr)
    return root
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 //先序遍历：先root，在左子树，再右子树
var flatten = function(root) {
    const arr=[]
    function deepnode(node){
        if(!node) return 
        arr.push(node)
        if(node.left) deepnode(node.left)
        if(node.right) deepnode(node.right)
    }
    deepnode(root)
    for(let i=1;i<arr.length;i++){
      arr[i-1].left=null
      arr[i-1].right=arr[i]
    }
    return arr
};