# JavaScript vs TypeScript

## OOP (Object-Oriented Programming)

TypeScript adds support for OOP features that don't exist natively in JavaScript.

### Interfaces

Allow the definition of contracts for objects or classes, specifying properties and methods that must be implemented.

```typescript
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Woof!");
  }
}
```

### Access Modifiers

Allows you to restrict the visibility of properties and methods in a class, such as `public`, `private` and `protected`.

- `public`: Accessible from anywhere
- `private`: Accessible only within the class
- `protected`: Accessible within the class and subclasses

```typescript
class Person {
  public name: string;     
  private age: number;      
  protected address: string; 

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

class Employee extends Person {
  private jobTitle: string;

  constructor(name: string, age: number, address: string, jobTitle: string) {
    super(name, age, address);
    this.jobTitle = jobTitle;
  }

  getDetails() {
    // You can access 'address' as it is 'protected'
    return `${this.name} (${this.jobTitle}) lives at ${this.address}`;
  }
}
```

### Abstract Classes

Allow the definition of classes that cannot be instantiated directly, but serve as a base for other classes. In the example below, `Circle` must implement the `calculateArea` method. Otherwise, there will be errors.

```typescript
abstract class Shape {
  abstract calculateArea(): number; // abstract method

  describe(): string {
    return "This is a shape.";
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

### `readonly` keyword

TypeScript includes the readonly keyword that makes a property as read-only in the class, type or interface.

Read-only members can be accessed outside the class, but their value cannot be changed.

```typescript
class Employee {
    readonly empCode: number;
    empName: string;
    
    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}
let emp = new Employee(10, "John");
emp.empCode = 20; //Compiler Error
emp.empName = 'Bill'; 
```

### Enums

Allows you to define sets of named constants.

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

class Paint {
  private color: Color; // 0, 1, 2

  constructor(color: Color) {
    this.color = color;
  }

  getColor(): string {
    return Color[this.color]; // "Red", "Green", "Blue"
  }
}
```

### Function and Method Overloading

Function overloading is a TypeScript feature that lets us define a function that accepts different kinds of arguments.

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): number;

function add(a: unknown, b: unknown): number {
  if (typeof a === "string" && typeof b === "string") {
    return Number(a) + Number(b);
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 0;
}
```

We can also overload constructor or class methods.

```typescript
class Greeter {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  greet(person: string): string;
  greet(persons: string[]): string;
  greet(person: unknown) {
    if (typeof person === "string") {
      return `${this.message}, ${person}!`;
    } else if (Array.isArray(person)) {
      return person.map((name) => `${this.message}, ${name}!`).join("\n");
    }
    return "";
  }
}
```
