import React, { useState } from "react"
import { authApi } from "./../auth/authSettings"

export const StrMapContext = React.createContext()

export const StrMapProvider = (props) => {
    const [ person, setPerson ] = useState([])
    const [ personById, setPersonById ] = useState([])
    
    const getPersonAll = (distance) => {
        let fetchURL = authApi.localApiBaseUrl+"/person"

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
        let fetchURL = authApi.localApiBaseUrl+"/person/"+personId
        // let fetchURL = `http://localhost:8000/person/${personId}`
        // console.log("GET: "+fetchURL);
        return fetch(fetchURL, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("gys_token")}`
            }
        })
            .then(response => response.json())
            // .then(setPersonById)
    }

    //normal PUT fetch accepting an id
    //this app only updates logged in user so 0 tells backend to use logged in token
    // const updatePerson = (id, person) => {
        // let fetchURL = `http://localhost:8000/person/${id}` 

    const updatePerson = (person) => {
        let fetchURL = authApi.localApiBaseUrl+"/person/0"
        // debugger
        return fetch(fetchURL, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("gys_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(person)
        })
        .then(() => getPersonAll(3))

        // .then(response => response.json())
        // .then(setVars => {
        //     localStorage.setItem( "gys_username", setVars.user.username ) // for logout navbar
        //     localStorage.setItem( "gys_latitude", setVars.latitude ) // lat/long to center map on first render
        //     localStorage.setItem( "gys_longitude", setVars.longitude )
        // }
        // )
    }
    
    const deletePerson = () => {
        return fetch(authApi.localApiBaseUrl+`/person/0`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("gys_token")}`,
            }
        }).then(()=>{
            localStorage.setItem("gys_token", "") //set token for auth
        })
    }

    return (
        <StrMapContext.Provider value={{
            person,
            personById,
            getPersonAll,
            getPersonById,
            updatePerson,
            deletePerson
            }} >
            { props.children }
        </StrMapContext.Provider>
    )
}