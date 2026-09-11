class Student {
    name: string
    age: number
    email: string
    marks: number     

    constructor(name: string, age: number, email: string, marks: number) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.marks = marks;
    }  
    
}

const student1 = new Student("John Doe", 20, "john.doe@example.com", 85);
