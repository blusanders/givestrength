import React, { useState } from "react"

export const StrMapContext = React.createContext()

export const StrMapProvider = (props) => {
    const [ person, setPerson ] = useState([])
    const [ personById, setPersonById ] = useState([])
    
    const getPersonAll = (distance) => {
        let fetchURL = `http://localhost:8000/person`

        if (distance) {
            fetchURL += `?distance=${distance}`
        }

        return fetch(fetchURL, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("gys_token")}`
            }
        })
            .then(response => response.json())
            .then(setPerson)
    }
    
    const getPersonById = (personId) => {
            let fetchURL = `http://localhost:8000/person/${personId}`
            console.log(fetchURL);

        return fetch(fetchURL, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("gys_token")}`
            }
        })
            .then(response => response.json())
            .then(setPersonById)
    }

    const updatePerson = (id, person) => {
        let fetchURL = `http://localhost:8000/games/${id}` 
        // debugger
        return fetch(fetchURL, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("gys_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(person)
        })
    }
    
    return (
        <StrMapContext.Provider value={{
            person,
            personById,
            getPersonAll,
            getPersonById,
            updatePerson
            }} >
            { props.children }
        </StrMapContext.Provider>
    )
}