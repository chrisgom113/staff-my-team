module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>Your Team Profile</title>
    </head>
    
    <body>
    <header class="border border-primary bg-primary py-5 text-center">
       <h1 class="fs-1 text-light">The Team to Out-Team All the Teams</h1> 
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div class=" col-12 d-flex justify-content-center">
                    ${generateProfiles(team)}
                </div>
            </div>
      </div>
    </body>
    </main>
    
    
    </html>`
}

const generateProfiles = team => {

    const generateManager = manager => {
        return `<div class="card employee-card manager-card">
        <div class="card-header text-center">
            <h2 class="card-title">${manager.getName()}</h2>
            <h4 class="card-title">Title: ${manager.getRole()}</h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
            </ul>
        </div>
    </div>`;
    };

    const generateEngineer = engineer => {
        return `<div class="card employee-card engineer-card">
        <div class="card-header text-center">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h4 class="card-title">Title: ${engineer.getRole()}</h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
            </ul>
        </div>
    </div>`;
    };

    const generateIntern = intern => {
        return `<div class="card employee-card intern-card">
        <div class="card-header text-center">
            <h2 class="card-title">${intern.getName()}</h2>
            <h4 class="card-title">Title: ${intern.getRole()}</h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`
    };

    const htmlPage = [];

    htmlPage.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)));
    htmlPage.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)).join(''));
    htmlPage.push(team.filter(employee => employee.getRole() === "Intern").map((intern) => generateIntern(intern)).join(''));

    return htmlPage.join('');
}