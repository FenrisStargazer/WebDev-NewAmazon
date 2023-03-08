window.onload = function() {
    loadWork();
}

function loadWork(){
    fetch(`http://localhost:3000/work`, {
        headers: {
            'Accept': 'application/json'
        }
    })

    .then(response => {
        return response.json();
    })
    .then(data => {
        for(let i = 0; i <= data.message.length - 1; i++) {
            addWork(data.message[i].work_id, data.message[i].title, data.message[i].work_content);
        }
    })
}