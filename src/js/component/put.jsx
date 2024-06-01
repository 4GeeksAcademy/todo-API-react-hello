import React, { useState } from "react";



const Put = async() => {
    try  {
        const res = await fetch('https://playground.4geeks.com/todo/openapi.json/api/users/id'),
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
    });
    const data = await res.json();

    if (!res.ok) {
        console.log(data.description);
        return;
    }
    
    console.log(data);
} catch (error) {
    console.log(error);
}



export default Put;