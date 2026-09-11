const studentName = "John Doe";
const studentAge = 20;
const studentEmail = "john.doe@example.com";

const studentName2 = "Jane Smith";
const studentAge2 = 22;
const studentEmail2 = "jane.smith@example.com";


const createStudent = (name: string, age: number, email: string) => {
    return {
        name,
        age,
        email
    };
};

const student1 = createStudent(studentName, studentAge, studentEmail);
const student2 = createStudent(studentName2, studentAge2, studentEmail2);


