import React from 'react';
import { Button } from './Button';

export const Todo = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <div className='Todo'>
            <div>
                <input
                    type="checkbox"
                    checked={todo.concluida}
                    onChange={() => toggleComplete(todo.id)}
                />
                <div>
                    <p onClick={() => toggleComplete(todo.id)}
                    style={{
                        textDecoration: todo.concluida ? 'line-through' : 'none',
                        cursor: 'pointer'
                    }}
                    >
                    {todo.texto}
                    </p>
                </div>
            </div>

            <Button onClick={() => removeTodo(todo.id)}>
                Remover
            </Button>

        </div>
    );
};