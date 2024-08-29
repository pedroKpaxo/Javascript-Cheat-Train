# Javascript Cheat Training

This is a training for Javascript. It is a cheat sheet for the most important concepts of Javascript.

- [Javascript Cheat Training](#javascript-cheat-training)
- [Installation](#installation)
- [Usage](#usage)
  - [Javascript](#javascript)
  - [Typescript](#typescript)
- [Concepts](#concepts)
  - [Basic Concepts](#basic-concepts)
    - [01-array-methods](#01-array-methods)
    - [02-array-creation](#02-array-creation)
    - [03-control-flow](#03-control-flow)
    - [04-loops](#04-loops)
  - [Algorithms](#algorithms)
    - [01-two-sum](#01-two-sum)
    - [02-reverse-linked-list](#02-reverse-linked-list)
    - [03-quick-sort](#03-quick-sort)
    - [04-fibonacci](#04-fibonacci)
    - [05-palindrome](#05-palindrome)
  - [Exercises](#exercises)
    - [01-substring](#01-substring)
    - [02-counter](#02-counter)
    - [03-snail-array](#03-snail-array)
    - [04-sleep](#04-sleep)
  - [Promises](#promises)


# Installation

1. Clone the repository
2. Make sure you have node installed
3. Also, install Typescript globally, and ts-node.

# Usage

Run the file that you want to check with the command:

## Javascript
```bash
node <filename>
```

## Typescript
```bash
ts-node <filename>
```

# Concepts
Here are a list of the concepts that are covered in this training.

## Basic Concepts

### 01-array-methods
- [file](./basic/01-array-methods.js)
  
Basic array methods in Javascript.

### 02-array-creation
- [file](./basic/02-array-creation.js)

Different ways to create an array in Javascript.

### 03-control-flow
- [file](./basic/03-control-flow.js)

Control flow in Javascript. Using if, else, switch, for, while, do-while.

### 04-loops
- [file](./basic/04-loops.js)

Different types of loops in Javascript. For, for-in, for-of


## Algorithms

### 01-two-sum
- [file](./algo/01-two-sum.js)

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

### 02-reverse-linked-list
- [file](./algo/02-reverse-linked-list.ts)

A partial implementation of a linked list.
Reverse a singly linked list.

```ts
class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    head: ListNode<T> | null = null;

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
```
### 03-quick-sort
- [file](./algo/03-quick-sort.js)

Quick sort algorithm implementation.

### 04-fibonacci
- [file](./algo/04-fib.js)

Fibonacci sequence implementation.

### 05-palindrome
- [file](./algo/05-palindrome.js)

Check if a string is a palindrome.


## Exercises
Some exercises to practice the concepts.

### 01-substring
- [file](./exercises/01-substring.js)

Given a string, find the length of the longest substring without repeating characters.

### 02-counter
- [file](./exercises/02-counter.js)

Using the concept of closures, create a counter that increments by 1 each time it is called.

### 03-snail-array
- [file](./exercises/03-snail-array.js)

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

### 04-sleep
- [file](./exercises/04-sleep.js)

Implement a sleep function that takes a number of milliseconds and resolves after that time.

## Promises
In this folder there are some implementations of promises.
- [folder](./promises)
