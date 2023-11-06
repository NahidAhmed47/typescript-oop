class Person {
    constructor(public name: string, public age: number, public address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(hours: number) {
        console.log(`${this.name} sleep total ${hours} hours`);
    }
}

class Student extends Person {
    constructor(name: string, age: number, address: string ){
        super(name, age, address)
    }
}

const student = new Student("Nahid Ahmed", 20, "Sylhet");
// console.log(student)
// student.getSleep(10);

class Teacher extends Person {
    constructor(name: string, age: number, address: string, public designation: string){
        super(name, age, address);
        this.designation = designation;
    }
    totalClass(totalClass: number){
        console.log(`${this.name} will take total ${totalClass} class!`);
    }
}

const teacher = new Teacher("Nahid", 30,"Bangladesh", "Teacher");
console.log(teacher)
teacher.getSleep(6);
teacher.totalClass(5)