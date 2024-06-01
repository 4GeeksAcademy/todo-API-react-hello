import React { useState } from "react";
import Post from "./post";
import Delete from "./delete";
import Get from "./get";
import Put from "./put";


const ButtonHolder = () => {
    Return(
        <div>
            <section>
                <h1>User operations</h1>
                <p>Operations on usser.</p>
            </sectoin>
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
            <section>
                <h1>Todo operations</h1>
                <p>Operations on Todos.</p>
            </section>
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
    );