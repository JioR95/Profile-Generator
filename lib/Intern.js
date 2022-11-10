const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email)
        this.school =this.school;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Intern;