//creating person class

//constructor name should start with capital letter
class Person {
    constructor(fullName, accountNumber) {
        this.fullName = fullName;
        this.accountNumber = accountNumber;
    }

    displayAccountNum() {

        const num = this.accountNumber;
        // for(let i = 3; i < num.length - 4; i++)
        //     num[i] = '*'

        console.log(num[3])

    }
}

const personExample = new Person('Andrzej Wajda', '82 8888 1111 8888 8888 8888 0000');
// console.log(personExample);
personExample.displayAccountNum()