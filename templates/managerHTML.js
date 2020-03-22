function managerInfo(manager) {
    return `
    <div class="card m-3 shadow">
        <div class="card-header">
            <h2>${manager.getName()}</h2>
            <h2>${manager.getRole()}</h2>
        <div>
        <ul class: "list-group">
            <li class="list-group-item"> Email: ${manager.getEmail()}</li>
            <li class="list-group-item"> ID: ${manager.getId()}</li>
            <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
    `
}

//the way i'm imagining mainhtml to work, is that each item in the array that is passed
// to it checks to see what the role is, then calls the respective template 
// but right now, it's just returning undefined
//I will take a look
module.exports = managerInfo;