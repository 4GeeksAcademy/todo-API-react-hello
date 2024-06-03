import React from 'react';

const Post = async (userName) => {
    try {
        const res = await fetch(`https://playground.4geeks.com/todo/todos/${userName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userName)
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

export default Post;