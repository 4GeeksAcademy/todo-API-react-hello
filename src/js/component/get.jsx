import React { useState } from "react";


const Get = async() => {
    try {
        const res = await fetch('https://playground.4geeks.com/todo/openapi.json/api/users');
        const data = await res.json();

        if (!res.ok) {
            console.log (data.description);
            return;
        }

        console.log(data.data[id].user_Name);
    } catch (error) {
        console.log(error);
}


export defualt Get;
