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

const personExample = new Person('Beata Tyszkiewicz', '82 8888 1111 8888 8888 0000');
// console.log(personExample);
// personExample.displayAccountNum();


const peopleList = [
    new Person('Andrzej Wajda', '4240 2301 0000 0010 0000 9371'),
    new Person('Zbigniew Wodecki', '4240 1111 0100 0010 8888 9371'),
    personExample
];

class Render {
    static renderList(listToRender, elementToRender) {
        const element = document.querySelector(elementToRender);
        listToRender.map((currentElement) => {
            console.log(currentElement.fullName);
            element.innerHTML += `
<div class="student__row">
<div class="student__item">${currentElement.fullName}</div>
<div class="student__item">${currentElement.accountNumber}</div>
</div>`
        })
    }
}

Render.renderList(peopleList, '.student__container')