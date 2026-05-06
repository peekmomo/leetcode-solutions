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

var mergeTwoLists = function(list1, list2) {
    let head1=list1
    let head2=list2
    const newlist=new ListNode(-1)
    let newhead=newlist
    while(head1 && head2){
        if(head1.val>head2.val){
            newhead.next=head2
           head2=head2.next
        }else{
           newhead.next=head1
           head1=head1.next
        }
        newhead=newhead.next
    }
    newhead.next=head1 || head2
    return newlist.next 
};


/**
 * @param {ListNode} head
 * @return {boolean}
 */
 //思路：环就是链尾到链表中某一位
 //环状链表不会又next=null,只能使用快慢指针
 //快指针每次走两步，但是慢指针每次走一步，进行判断fast==slow
var hasCycle = function(head) {
    let slow=head
    let fast=head
    let isPos=false
    while(fast&& fast.next){
        
        slow=slow.next
        fast=fast.next.next
        if(fast==slow){
            isPos=true
            return isPos
        }
    }
    return isPos
};
 