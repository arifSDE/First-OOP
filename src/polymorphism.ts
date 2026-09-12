class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    makeSound(): void {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    color: string;

    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    }

    makeSound(): void {
        console.log("Cat meows");
    }
}


abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
    abscribe(): void {
        console.log("This is an abstract class");
    }
}


class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}