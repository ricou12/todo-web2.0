/* ------------------------------------------
            REQUETES ASYNCHRONES
------------------------------------------- */
// Adress
const BaseUrl = "http://localhost:3000/api/v1/todos/";

// OBTENIR LA LISTE DES TODO OU UN SEUL VIA SON ID
export const requestTodo = (id="") => {
    return fetch(BaseUrl + id)
        .then(res => res.json())
        .then(dataTodo => {
            return dataTodo;
        });
}

// AJOUTER OU MODIFIER
export const ChangedOrAdded = (id, verbe, data) => {
    return fetch(BaseUrl + id, {
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
    return fetch(BaseUrl + id, {
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