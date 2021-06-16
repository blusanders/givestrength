import React, { useState } from "react"

export const StrMapContext = React.createContext()

export const StrMapProvider = (props) => {
    const [ person, setPerson ] = useState([])

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
        // debugger
        let fetchURL = "http://localhost:8000/person/"+personId
        return fetch(fetchURL, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("gys_token")}`
            }
        })
        .then(res => res.json())

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
        // .then(response => response.json())
        // .then(getStrMaps)
    }
    
    return (
        <StrMapContext.Provider value={{
            person,
            getPersonAll,
            getPersonById,
            updatePerson
            }} >
            { props.children }
        </StrMapContext.Provider>
    )
}