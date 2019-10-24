//creating person class

//constructor name should start with capital letter
class Person {
    constructor(name, address, idNumber, age) {
    this.name = name;
    this.address = address;
    this.idNumber = idNumber;
    this.age = age;
    }
    changeId(num) {
        this.idNumber = num
}
}

//creating student class
class StudentES6 extends Person {
    constructor (name, address, idNumber, age) {
        super(name, address, idNumber, age);
        this.role = 'Student';
    }
    displayFullInfo() {
        console.log(`Student ${this.name} id: ${this.idNumber}`);
    }
}
class TeacherES6 extends Person {
    constructor (name, address, idNumber, age){
    super(name, address, idNumber, age);
    this.role = 'Teacher';
}}

//creating students
const newStudentES6 = new StudentES6('Michal ES6', 'JS-owa 11', 777, 22);
const anotherStudent = new StudentES6 ('Kichal', 'Lipa 1', 666 , 55);

//creating teachers
const newTeacherES6 = new TeacherES6('TeacherName', 'Modularna 5', 999, 23);
console.log('\n');

const anotherTeacher =  new TeacherES6('Abra', 'kadabra 5', 222, 71);

//list arr
const studentsList = [];

//push students to arr
studentsList.push(newStudentES6, anotherStudent , newTeacherES6, anotherTeacher);

console.log(studentsList);


let outputHtml = '';

const htmlAnchor = document.querySelector('.student__container');


//function creating html output
function studentItemDiv(className, item, arg) {
    return `<div class="${className}">${item[arg]}</div>`
}

studentsList.map((element) => {

    outputHtml +=
        '<div class="student__row">' +
        studentItemDiv('student__item', element, 'name') +
        studentItemDiv('student__item', element, 'address') +
        studentItemDiv('student__item', element, 'idNumber') +
        studentItemDiv('student__item', element, 'age') +
        studentItemDiv('student__item', element, 'role') +
        '</div>' ;
});

htmlAnchor.innerHTML = outputHtml;