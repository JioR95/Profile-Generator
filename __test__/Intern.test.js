const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jio', '1', 'Jio@icloud.com', 'Penn State');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual();
    expect(intern.email).toEqual('');
    expect(intern.school).toEqual('UCF');
});

test("gets the intern's school", () => {
    const intern = new Intern('Jio', '1', 'Jio@icloud.com', 'UCF');
    expect(intern.getSchool()).toEqual('UCF');
});

test("gets the intern's role", () => {
    const intern = new Intern('Jio', '1', 'icloud.com', 'UCF');
    expect(intern.getRole()).toEqual('Intern');
});