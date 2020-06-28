
var deleteDuplicates = function(head) {
    if(head === null || head.next === null){
        return head;
    }
   
    var cur = head;
    
    while(cur.next){
        if(cur.val === cur.next.val){
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
   
    
    return head;
};