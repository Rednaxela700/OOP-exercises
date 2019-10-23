var studentES5 = {
    name: 'Andrzej Wajda',
    address: 'address street 123',
    idNumber: '2363623',
    profile: 'Construction Working',
    displayInfo: function () {
        console.log(this.name, '\n', this.address, '\n', this.idNumber, '\n', this.profile);
    },
    changeId: function (num) {
        this.idNumber = num.toString()
    }
};

// studentES5.displayInfo();

// studentES5.changeId(333222);
// studentES5.displayInfo();

const studentES6 = {
    name: 'Bandrzej Pajda',
    address: 'Fiolkowa 123',
    idNumber: '0308802210',
    profile: 'Zawud Piekasz',
    displayInfo: function () {
        console.log(`${this.name}\n${this.address}\n${this.idNumber}\n${this.profile}`);
    },
    changeId: function (num) {
        this.idNumber = num.toString()
    }
};

const ultimateStudentES6 = {
    name: '',
    address: '',
    idNumber: '',
    profile: '',
    setStudentData: function (name, address, idNumber, profile) {
        this.name = name;
        this.address = address;
        this.idNumber= idNumber;
        this.profile= profile;
    },
    displayInfo: function () {
        console.log(`${this.name}\n${this.address}\n${this.idNumber}\n${this.profile}`);
    }


};
const properStudent = Object.create((ultimateStudentES6));
properStudent.setStudentData('Jedrzej', 'Metalowa 666', 12323, 'Medical Student');
properStudent.displayInfo();
const properStudent2 = Object.create((ultimateStudentES6));
properStudent2.setStudentData('Andrzej', 'Rockowa 555', 8850, 'Engineer');

// const firstStudent = Object.create(ultimateStudentES6);
// firstStudent.setName('Michal');
// firstStudent.setAddress('Ulica 1');
// firstStudent.setIdNumber(12323);
// firstStudent.setProfile('Medical Student');
// console.log(firstStudent);
const properStudent3 = Object.create((ultimateStudentES6));


properStudent3.setStudentData('DzejDzej', 'Jazzowa 1358', 12323, 'SSS');

const studentsList = []

studentsList.push(properStudent, properStudent2, properStudent3);
console.log(studentsList);