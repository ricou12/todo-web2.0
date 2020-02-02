/* ------------------------------------------
            REQUETES ASYNCHRONES
------------------------------------------- */

// OBTENIR LA LISTE DES TODO OU UN SEUL VIA SON ID
export const requestTodo = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(dataTodo => {
            return dataTodo;
        });
}

// AJOUTER OU MODIFIER
export const ChangedOrAdded = (url, verbe, data) => {
    return fetch(url, {
            method: verbe,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(returnData => {
            return returnData;
        })
        .catch((error) => {
            console.log(error.message);
        });
}

// SUPPRIMER
export const resquestDelete = (id) => {
    return fetch(`http://localhost:3000/api/v1/todos/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(returnData => {
            return returnData;
        })
        .catch((error) => {
            console.log(error.message);
        });
}