const createManager = function (manager) {
    return `
      <div class= "col-4 mt-4"> <div class= "card h-100">
      <div class= "card-header">
      <h2>${manager.name}</h2>
      <h3>Manager</h3><i class="material-icons">supervisor_account</i>
      </div>
      <div class= "card-body">
      <p class= "id">ID: ${manager.id} </p>
      <p class= "email>Email: <a href= "mailto:${manager.email}">${manager.email} </a> </p>
      <p class= "office">Office Number: ${manager.officeNumber} </p>
      </div>
      </div>
      </div>
    `;
}

const createEngineer = function (engineer) {
    return `
    <div class= "col-4 mt-4"> <div class= "card h-100">
    <div class= "card-header">
    <h2>${engineer.name}</h2>
    <h3>Engineer</h3><i class="material-icons">build</i>
    </div>
    <div class= "card-body">
    <p class= "id">ID: ${engineer.id}</p>
    <p class= "email">Email: <a href= "mailto${engineer.email}">${engineer.email}</a></p>
    </div>
    </div>
    </div>
    `
}

const createIntern = function (intern) {
    return `
    <div class="col-4 mt-4"> <div class= "card h-100>
    <div class="card-header">
    <h2>${intern.name}</h2>
    <h3>Intern</h3><i class="material-icons">account_circle</i>
    </div>
    <div class= "card-body">
    <p class= "id">ID: ${intern.id}</p>
    <p class= "email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p class= "school">School: ${intern.school}</p>
    </div>
    </div>
    </div>
    `
};

generateHTML = (data) => {

    staffArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = createManager(employee);

            staffArray.push(managerCard);
        }

        if (role === 'Engineer'){
            const engineerCard = createEngineer(employee);

            staffArray.push(internCard);
        }
    }
    const employeeCards = staffArray.join('')

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}


