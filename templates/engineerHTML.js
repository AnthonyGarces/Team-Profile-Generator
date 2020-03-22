function engineerInfo(engineer) {
    return `
    <div class="card m-3 shadow">
        <div class="card-header">
            <h2>${engineer.getName()}</h2>
            <h2>${engineer.getRole()}</h2>
        <div>
        <ul class: "list-group">
            <li class="list-group-item"> Email: ${engineer.getEmail()}</li>
            <li class="list-group-item"> ID: ${engineer.getId()}</li>
            <li class="list-group-item"> Github: ${engineer.getGithub()}</li>
        </ul>
    </div>
    `
}

module.exports = engineerInfo;