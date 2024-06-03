import React, { useState } from "react";
// import Post from "./post";
// import Delete ectionfrom "./delete";
// import Get from "./get";
// import Put from "./put";


const ButtonHolder = () => {
    Return(
        <div>
            <section id="header">
                <h1>Todo API</h1>
                <div>0.1.0</div>
                <div>OAS 3.1</div>
            </section>
            <section id="links">
                <a id="playground" href="https://playground.4geeks.com/todo/openapi.json">
                    /todo/openapi.json    
                </a>
                <p>An API for storing Todo Lists.</p> 
                <a href="#">Contact the developer</a> 
            </section>
            <section id="server">
                <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">Server</button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="#">/todo</a>
                    </div>          
                </div>
            </section>
            <section>
                <h2>User operations</h2>
                <p>Operations on usser.</p>
                <div>
                    <button>
                        <Post />
                    </button>
                    <button>
                        <Delete />
                    </button>
                    <button>
                        <Get />
                    </button>
                    <button>
                        <Get />
                    </button>
                </div>
            </section>
            <section>
                <h1>Todo operations</h1>
                <p>Operations on Todos.</p>
                <div>
                    <button>
                        <Post />
                    </button>   
                    <button>
                        <Put />    
                    </button>   
                    <button>
                        <Delete />    
                    </button>
                </div>
            </section>
            <section>
                <p>Schemas</p>
                <div>
                    <button>
                        <h3>HTTPValidationError</h3>
                        <p>Expand all objects</p>    
                    </button>   
                    <button>
                        <h3>TodoItemCreate</h3>
                        <p>Expand all objects</p>   
                    </button>   
                    <button>
                        <h3>TodoItemRead</h3>
                        <p>Expand all objects</p> 
                    </button>   
                    <button>
                        <h3>TodoItemUpdate</h3>
                        <p>Expand all objects</p>     
                    </button>   
                    <button>
                        <h3>TodoUserList</h3>
                        <p>Expand all objects</p>     
                    </button>   
                    <button>
                        <h3>TodoUserRead</h3>
                        <p>Expand all objects</p>  
                    </button>   
                    <button>
                        <h3>TodoUserReadWithIeams</h3> 
                        <p>Expand all objects</p>   
                    </button>   
                    <button>
                        <h3>ValidationError</h3>
                        <p>Expand all objects</p>    
                    </button>   
                </div>  
            </section>   
        </div>
    );
}


export default ButtonHolder;