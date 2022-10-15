const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
    super(name, id ,emil)
    this.officeNumber=this.officeNumber;
}
getrole() {
    return "Manager"
   }
}

module.exports = Manager;