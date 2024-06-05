import React from 'react';

const Delete = async (id) => {
    try {
        const res = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json'
            }
        });

        if (res.status === 204) {
            console.log(`Successfully deleted todo with ID ${id}`);
            return true;
        } else {
            const error = await res.json();
            console.error(`Error deleting todo with ID ${id}:`, error.detail);
            return false;
        }
    } catch (error) {
        console.error(`Error deleting todo with ID ${id}:`, error);
        return false;
    }
};

export default Delete;






