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
    
            alert(`Loged in!`);
            document.location.href = 'index.html';
    
        } else {
            // Alert user of bad credentials
    
            alert(`Uh, oh!`);
    
        }
    })
}