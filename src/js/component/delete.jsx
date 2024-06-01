import React { useState } from "react";


const Delete = async() => {
    try {
        const res = await fetch('https://playground.4geeks.com/todo/openapi.json/api/users{userName}', {
            method: 'DELETE'
        });
        const data = await res.json();


        if(!res.ok) {
            console.log(data.description);
            return;
        }

        console.log(data);
    } catch (error) {
        console.log(error);
    }    
};


export default Delete;