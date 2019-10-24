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


//list arr
const studentsList = [];
const teachersList = [];

const input_Name = document.querySelectorAll('input')[0];
const input_Address = document.querySelectorAll('input')[1];
const input_IdNumber = document.querySelectorAll('input')[2];
const input_Age = document.querySelectorAll('input')[3];
const button = document.querySelector('.btn');

function createStudent(constructor_or_class) {
    const newObj = new constructor_or_class(input_Name.value, input_Address.value, input_IdNumber.value, input_Age.value);

    studentsList.push(newObj);
}


//push students to arr
studentsList.push(newStudentES6, anotherStudent);
teachersList.push(newTeacherES6);


render(studentsList); //run render
console.log(studentsList);



function render(array) {
    let outputHtml = '';
    const htmlAnchor = document.querySelector('.student__container');
//function creating html output
function studentItemDiv(className, item, arg) {
    return `<div class="${className}">${item[arg]}</div>`
}

array.map((element) => {

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

}
button.addEventListener('click', () => {
   console.log('btn clicked')
});