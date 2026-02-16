import React from 'react'
import { useParams } from 'react-router-dom'

export default function User(){

    const {id} = useParams();
    return(
        <>
        <h1>Welcome to the User Page</h1>
        <p>the user id is <s>{id}</s></p>
        </>
    )
}