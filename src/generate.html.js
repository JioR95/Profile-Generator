const createManager = function (manager) {
    return `
    <div class= "col-4 mt-4">
     <div class= "card h-100">
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