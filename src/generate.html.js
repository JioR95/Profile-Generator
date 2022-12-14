const createManager = function (manager) {
    return `
    <div class= "col-4 mt-4"> <div class= "card h-100">
    <div class= "card-header bg-primary text-white">
    <h2>${manager.name}</h2>
    <h3>Manager</h3><i class="material-icons">supervisor_account</i></div>
    <div class= "card-body">
    <p class= "name">Name: ${manager.name} </p>
    <p class= "id">ID: ${manager.id} </p>
    <p class= "email">Email: <a href= "mailto:${manager.email}">${manager.email} </a> </p>
    <p class= "office">Office Number: ${manager.officeNumber} </p>
    </div>
    </div>
    </div>
    `
}

const createEngineer = function (engineer) {
    return `
    <div class= "col-4 mt-4"> <div class= "card h-100">
    <div class= "card-header bg-primary text-white">
    <h2>${engineer.name}</h2>
    <h3>Engineer</h3><i class="material-icons">build</i></div>
    <div class= "card-body">
    <p class= "name">Name: ${engineer.name} </p>
    <p class= "id">ID: ${engineer.id}</p>
    <p class= "email">Email: <a href= "mailto${engineer.email}">${engineer.email}</a></p>
    </div>
    </div>
    </div>
    `
}

const createIntern = function (intern) {
    return `
    <div class= "col-4 mt-4"> <div class= "card h-100">
    <div class= "card-header bg-primary text-white">
    <h2>${intern.name}</h2>
    <h3>Intern</h3><i class="material-icons">books</i></div>
    <div class= "card-body">
    <p class= "name">Name: ${intern.name}</p>
    <p class= "id">ID: ${intern.id}</p>
    <p class= "email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p class= "school">School: ${intern.school}</p>
    </div>
    </div>
    </div>
    `
}

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

            staffArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = createIntern(employee);

            staffArray.push(internCard);
        }
    }
    const employeeCards = staffArray.join('')

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

    const generateTeamPage = function (employeeCards) {
        return`
        <!DOCTPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        </head>
        <body>
        <header>
        <nav class="navbar" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center bg-danger text-white" id="navbar-text">Staff Team</span>
        </nav>
        </header>
        <main>
        <div class="container">
        <div class="row justify-content-center" id="team-cards">
        <!--Team Cards-->
        ${employeeCards}
        </div>
        </div>
       </main>
       </body>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`
} 

module.exports = generateHTML;



