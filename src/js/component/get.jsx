import React from 'react';

const Get = async () => {
    try {
        const res = await fetch('https://playground.4geeks.com/todo/users/mandoromero');
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return [];
        }

        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default Get;