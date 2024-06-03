import React from 'react';

const Put = async (id, updatedUser) => {
    try {
        const res = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return null;
        }

        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default Put;