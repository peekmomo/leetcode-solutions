//相交链表
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }

    return pA; 
};

//反转链表
var reverseList = function(head) {
   let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next; 
        curr.next = prev;     
        prev = curr;          
        curr = next;         
    }

    return prev;  
};