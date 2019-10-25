//creating person class

//constructor name should start with capital letter
class Person {
    constructor(fullName, accountNumber) {
        this._fullName = fullName; //private methods
        this._accountNumber = accountNumber; //private methods
    }
    get fullName() {
        return this._fullName
    }
    get accountNumber() {
        return this._accountNumber.replace(
            this._accountNumber.slice(2, 22), ' **** **** **** **** ****'
        )
    }
}


const personExample = new Person('Andrzej Wajda', '82 8888 1111 8888 8888 0000');
// console.log(personExample);
// personExample.displayAccountNum();

let str = '82 8888 1111 8888 8888  0000';
// str.split(' ')
anotherStr = str.split(' ').splice(1, 5)
console.log(anotherStr);


const peopleList = [
    new Person('Ja 2', '4240 2301 0000 0010 0000 9371'),
    new Person('Ja 3', '4240 1111 0100 0010 8888 9371'),
    personExample
];
console.log(personExample.accountNumber)

