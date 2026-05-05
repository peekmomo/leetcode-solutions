// //相交链表
// var getIntersectionNode = function(headA, headB) {
//     if (!headA || !headB) return null;

//     let pA = headA;
//     let pB = headB;

//     while (pA !== pB) {
//         pA = pA ? pA.next : headB;
//         pB = pB ? pB.next : headA;
//     }

//     return pA; 
// };

// //反转链表
// var reverseList = function(head) {
//    let prev = null;
//     let curr = head;

//     while (curr !== null) {
//         let next = curr.next; 
//         curr.next = prev;     
//         prev = curr;          
//         curr = next;         
//     }

//     return prev;  
// };

//回文列表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 //思路：首先进行判断改节点是否为空
 //进行判断将该节点存在数组中
 //反转之后和反转之前一样
var isPalindrome = function(head) {
    let isSimpe=true
    let arr=[]
    for(let i=0;i<head.length;i++){
        arr.push(head[i])
    }
    arr=arr.reverse()
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=head[i]){
            console.log(arr[i],head[i])
            isSimpe=false
        }
    }
    return isSimpe
};