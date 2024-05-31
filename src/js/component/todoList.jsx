import React, { useState } from "react";

const TodoList = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (todo) => {
        if (todo !== ""){
        const newTodo = {
            id: Math.random(),
            todo: todo,
        
        };
        setList([...list, newTodo]);
        setInput("");
    }
    };

    const deleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

    return (
        <div className="parent">
            <div className="child-1"></div>
            <div className="child-2"></div>
            <div className="container">
                <h1>todos</h1>
                <div className="input">
                    <input
                        type="text"
                        value={input}
                        placeholder="What needs to be done?"
                        size="45"
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addTodo(input)}
                    />

                    <button className="add" onClick={() => addTodo(input)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                    </button>
                    <ul>
                        {list.map((todo) => (
                            <li className="to-do" key={todo.id}>
                                {todo.todo}
                                <button className="delete" onClick={() => deleteTodo(todo.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.29a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="counter">
                        Task:{list.length}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;









 //     async function postTodo(){
    //         let response = await fetch("https://playground.4geeks.com/todo/todos/mando_romero", {
    //             method:"POST",
    //             headers: {"Content-type":"application/json"},
    //             body:JSON.stringify({label:todo, is_done:"false"})
    //         })
    //         let data = response.json()
    //     }postTodo()

     // }
 





 // useEffect(() => {
    //     async function createUser (){
    //         let response = await fetch("https://playground.4geeks.com/todo/users/mandoromero", {
    //             method:"POST",
    //             headers: {"Content-type":"application/json"}
    //         })
    //         let data = await response.json()
    //     }
    //     createUser()
    // }, [])
    // useEffect(() => {}, [todo])
