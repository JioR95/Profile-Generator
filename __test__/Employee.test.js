const Employee = require('../lib/Employee')

test('create a object', () => {
    const Employee = new Employee('Jio', 1, 'Jio@icloud.com')
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})

test('name of object', () => {
    const Employee = new Employee('Jio', 1, 'Jio@icloud.com')
    expect(employee.getName()).toEqual(expect.any(String));
})

test('id of object', () => {
    const Employee = new Employee('Jio', 1, 'Jio@icloud.com')
    expect(employee.getId()).toEqual(expect.any(Number))
})
                                                                                                                                                          
test('email of object', () => {
    const Employee = new Employee('Jio', 1, 'Jio@icloud.com.com')
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
})

//test below finds the rold of object
test('role of employee', () => {
    const Employee = new Employee('Jio', 1, 'Jio@icloud.com')
    expect(employee.getRole()).toEqual("Employee")
})
