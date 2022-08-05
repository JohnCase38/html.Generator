const Employee = require("./Employee");
var Intern = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {return "school";}
    getRole() {return "Intern";}
}

module.exports = Intern;