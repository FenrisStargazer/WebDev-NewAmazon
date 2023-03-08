window.onload = function() {
    let accordianItems = document.getElementsByClassName('accordion-collapse');

    accordianItems.forEach(element => {
        
        const  deleteButton = document.createElement('button');
        const deleteI = document.createElement('i');

        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('class', 'btn btn-danger');

        deleteI.setAttribute('class', 'bi bi-trash')

        deleteButton.appendChild(deleteI);

        element.appendChild(deleteButton);

        const editButton = document.createElement('button');
        const editI = document.createElement('i');

        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('class', 'btn btn-warning');

        deleteI.setAttribute('class', 'bi bi-tools')

    });

};

function addNewWork() {
    let label = document.getElementById('new-label');
    let content = document.getElementById('new-content');

    fetch(`http://localhost:3000/work/${label.value}/${content.value}`, {
        headers: {
            'Accept': 'application/json'
        },
        method: "POST"
    })

    .then(response => {
        return response.status;
    })

    .then(status => {
        alert(status);
    })


}

function deleteWork(id) {
    // let id = document.getElementsByClassName('accordion-item').id.value;

    fetch(`http://localhost:3000/work/${id}`, {
        headers: {
            'Accept': 'application/json'
        },
        method: "DELETE"
    })

    .then(response => {
        return response.status;
    })

    .then(status => {
        alert(status);
    })


}

function logAdmin() {
    let username = document.getElementById('admin-name').value;
    let password = document.getElementById('admin-pass').value;

    fetch(`http://localhost:3000/admin/${username}/${password}`, {
        headers: {
            'Accept': 'application/json'
        }
    })

    //TestAdmin
    //TestPasswor

    .then(response => {
        if(response.status == 201) {
            // Sign user in
            const temp = "hello";
            alert(`${temp}`);
            document.location.href = 'admin.html';
    
        } else {
            // Alert user of bad credentials
    
            alert(`Uh, oh!`);
    
        }
    })
}

function hey() {
    alert('hey');
}