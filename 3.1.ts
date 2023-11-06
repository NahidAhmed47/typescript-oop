{
    // 
    class Person {
        constructor(public name: string, public age: number) { }
        sayHello() {
            console.log(`Hello, Mr. ${this.name}`)
        }
    }

    const person1 = new Person('Nahid', 20);
    person1.sayHello();



    // 
}