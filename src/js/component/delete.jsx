import React from 'react';

const Delete = async (todoId) => {
    try {
        const res = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, {
            method: 'DELETE'
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

export default Delete;