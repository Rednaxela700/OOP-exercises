var student = {
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

student.displayInfo();

student.changeId(333222);
student.displayInfo();

var student2 = {
    name: 'Bandrzej Pajda',
    address: 'Fiolkowa 123',
    idNumber: '0308802210',
    profile: 'Zawud Piekasz',
    displayInfo: function () {
        console.log(this.name, '\n', this.address, '\n', this.idNumber, '\n', this.profile);
    },
    changeId: function (num) {
        this.idNumber = num.toString()
    }
};


student2.displayInfo();