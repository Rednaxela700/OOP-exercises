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

studentES5.displayInfo();

studentES5.changeId(333222);
studentES5.displayInfo();

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

console.log('\n')
studentES6.displayInfo();