const ultimateStudentES6 = {
    name: '',
    address: '',
    idNumber: '',
    profile: '',
    setStudentData: function (name, address, idNumber, profile) {
        this.name = name;
        this.address = address;
        this.idNumber = idNumber;
        this.profile = profile;
    },
    displayInfo: function () {
        console.log(`${this.name}\n${this.address}\n${this.idNumber}\n${this.profile}`);
    }


};

//creating list of students USING CONSTRUCTOR FUNCTION

function student(name, address, idNumber, profile) {
    this.name = name;
    this.address = address;
    this.idNumber = idNumber;
    this.changeId = function (newId) {
        this.idNumber = newId;
    };
    this.profile = profile;
}

//creating student using constructor above
const student1 = new student('Adam', 'Konwaliowa 2', 23232, 'Medical Diagnosis' );
const student2 = new student('Pawel', 'Wesola 25', '00000', 'Psychology' );
const student3 = new student('Gawel', 'zxc 222', '111', 'ASD' );
const student4 = new student('Michal', 'Wesola 25', '00000', 'WQWWWW' );



student3.changeId(77777);
//list arr
const studentsList = [];
studentsList.push(student1, student2, student3, student4);

let outputHtml = '';
studentsList.push();
console.log(studentsList);
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
        studentItemDiv('student__item', element, 'profile') +
        '</div>' ;
});

htmlAnchor.innerHTML = outputHtml;