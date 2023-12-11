/* sophisticated_code_example.js */

// This code calculates the fibonacci sequence up to a given number
function fibonacciSequence(num) {
  if (num <= 0) return [];

  let sequence = [0, 1];
  for (let i = 2; i <= num; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  
  return sequence;
}

// This function finds the factorial of a given number
function factorial(num) {
  if (num === 0 || num === 1) return 1;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

// This code generates a random 10-character alphanumeric string
function generateRandomString() {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < 10; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return randomString;
}

// This function checks if a given number is prime
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// This code generates a random password with uppercase, lowercase, and special characters
function generateRandomPassword() {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < 12; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return password;
}

// This function sorts an array of numbers in ascending order using bubble sort algorithm
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// This code calculates the area and circumference of a circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// This code demonstrates a simple implementation of a linked list
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Example usage of the code
console.log(fibonacciSequence(10));
console.log(factorial(5));
console.log(generateRandomString());
console.log(isPrime(11));
console.log(generateRandomPassword());
console.log(bubbleSort([5, 2, 9, 1, 3]));
let circle = new Circle(5);
console.log(circle.getArea());
console.log(circle.getCircumference());
let linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.display();