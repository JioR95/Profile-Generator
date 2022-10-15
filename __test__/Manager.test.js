const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Jio', '1', 'Jio@icloud.com', '2039362233');
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number))
});

test("gets the manager's role", () => {
    const manager = new Manager('Jio', '1', 'Jio@icloud.com', '203');
    expect(manager.getRole()).toEqual('Manager');
});