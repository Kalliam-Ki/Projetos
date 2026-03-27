import React from 'react';
import { Button } from './Button';

export const Todo = ({ todo, marcarConcluida, removeTodo }) => {
    return (
        <div className='Todo'>
            <div style = {{display:"flex", alignItems:"center", justifyContent:"center", gap:"8px"}}>
                <input
                    type="checkbox"
                    checked={todo.concluida}
                    onChange={() => marcarConcluida(todo.id)}
                />
                <div>
                    <p onClick={() => marcarConcluida(todo.id)}
                    style={{
                        textDecoration: todo.concluida ? 'line-through' : 'none',
                        cursor: 'pointer'
                    }}
                    >
                    {todo.texto}
                    </p>
                </div>

                <Button onClick={() => removeTodo(todo.id)}>
                    Remover
                </Button>

            </div>

            

        </div>
    );
};