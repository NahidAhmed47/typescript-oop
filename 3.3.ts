{
    // getter and setter in class 

class BankAccount {
    constructor(public readonly id: number, public name: string, protected _balance: number){
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    set deposit(amount: number){
        this._balance += amount;
    }
    get balance(){
        return this._balance;
    }
}

class StudentAccount extends BankAccount{
    constructor(id: number, name: string, _balance: number, public age: number){
        super(id, name, _balance);
        this.age = age;
    }
}

// const person = new BankAccount(111, "Nahid Ahmed", 50);
// person.deposit = 100;
// console.log(person.balance)
const student = new StudentAccount(1, "Nahid Ahmed", 200, 15);
student.deposit = 200;
console.log(student.age)
}