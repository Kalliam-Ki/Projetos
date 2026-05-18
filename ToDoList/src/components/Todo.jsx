import React from 'react';
import { Button } from './Button';

// onClick fará com que ao clicar no texto ele mude, e cursor pointer muda para a mãozinha no cursor
// mudar para onChange "conserta" isso

//Mudar o Button para Pressable, assim estilizando mais o programa
//Adicionar o icone de lixo para apagar as tarefas 
//(fazer um botão de lixo para habilitar a exclusão de cada tarefa, ou deixar o icne de lixo em cada tarefa?)

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

                <div>

                </div>

                <Button onClick={() => removeTodo(todo.id)}>
                    Remover
                </Button>

            </div>
        </div>
    );
};