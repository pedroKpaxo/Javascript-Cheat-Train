// linkedList.ts

/**
 * Definition of a ListNode
 */
class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

/**
 * Definition of a LinkedList
 */
class LinkedList<T> {
    head: ListNode<T> | null = null;

    /**
     * Append a new element to the end of the linked list
     * @param value The value to append
     */
    append(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    /**
     * Method to print the linked list in the format: 1 -> 2 -> 3 -> 4
     */
    print(): void {
        let current = this.head;
        const values: T[] = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}

/**
 * This function reverses a linked list in place
 * @param head The head of the linked list
 * @returns A new head of the linked list after reversing it
 */
function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {
    let prev: ListNode<T> | null = null;
    let current: ListNode<T> | null = head;
    while (current) {
        const next: ListNode<T> | null = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}



// Example usage of the LinkedList class
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original list:");
list.print(); // Output: 1 -> 2 -> 3 -> 4 -> 5

list.head = reverseList(list.head);

console.log("Reversed list:");
list.print(); // Output: 5 -> 4 -> 3 -> 2 -> 1

// Another example with a different data type
const stringList = new LinkedList<string>();
stringList.append("a");
stringList.append("b");
stringList.append("c");

console.log("Original string list:");
stringList.print(); // Output: a -> b -> c

stringList.head = reverseList(stringList.head);

console.log("Reversed string list:");
stringList.print(); // Output: c -> b -> a
