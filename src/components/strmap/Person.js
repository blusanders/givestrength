import React from "react";
import { useHistory, useParams } from 'react-router-dom';
import { StrMapContext } from './StrMapProvider';


export const Person = () => {
    
    const { personId } = useParams();

    useEffect(() => {
        getPersonByID(personId)
    }, [])
    
    return (
        <div>
            Hello 123
        </div>
    )
}
