import React from 'react';

const Post = async (todo) => {
    console.log("Received todo object:", todo);

    if (!todo || !todo.label) {
        console.error("Invalid todo object", todo);
        return null;
    }

    try {
        const res = await fetch(`https://playground.4geeks.com/todo/todos/mandoromero`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                label: todo.label,
                is_done: false
            })
        });
        const data = await res.json();
        if (!res.ok) {
            console.log(data.detail || "Error occurred");
            return null;
        }
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default Post;