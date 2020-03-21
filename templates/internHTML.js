function internInfo(intern) {
    return `
    <div class="card m-3 shadow">
        <div class="card-header">
            <h2>${intern.getName()}</h2>
            <h2>${intern.getRole()}</h2>
        <div>
        <ul class: "list-group">
            <li class="list-group-item"> Email: ${intern.getEmail()}</li>
            <li class="list-group-item"> ID: ${intern.getID()}</li>
            <li class="list-group-item"> School: ${intern.getSchool()}</li>
        </ul>
    </div>
    `
}

module.exports = internInfo;