const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jio', '1', 'jio@icloud.com', 'JioR95');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Jio', '1', 'Jio@icloud.com', 'JioR95');
    expect(engineer.getGithub()).toEqual('JioR95');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Jio', '1', 'Jio@icloud.com', 'JioR95');
    expect(engineer.getRole()).toEqual('Engineer');
});