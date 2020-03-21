function managerInfo(manager) {
    return `
    <div class="card m-3 shadow">
        <div class="card-header">
            <h2>${manager.getName()}</h2>
            <h2>${manager.getRole()}</h2>
        <div>
        <ul class: "list-group">
            <li class="list-group-item"> Email: ${manager.getEmail()}</li>
            <li class="list-group-item"> ID: ${manager.getID()}</li>
            <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
    `
}

module.exports = managerInfo;