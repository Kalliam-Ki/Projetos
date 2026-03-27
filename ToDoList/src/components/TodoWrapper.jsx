import react, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';


export const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (texto) => {
        const novaTarefa = {
                id: Date.now(), //Gera um ID com base no timestamp
                texto: texto,
                concluida: false //Para marcar e mostrar se foi finalizado
            };
            setTodos([...todos, novaTarefa]);
            //console.log(novaTarefa.id);
    };

    const removeTodo = (id) => {

        const novosTodos = todos.filter(todo => todo.id !== id);

        setTodos(novosTodos);

    };

    const marcarConcluida = (id) => {

        setTodos(todos.map(todo => todo.id === id ?
            {...todo, concluida: !todo.concluida} 
            : todo
        ));

    };
    

    return (
        <div className='TodoWrapper'>

                <TodoForm addTodo={addTodo} />

                {todos.map((todo, id) => (

                    <Todo 
                        todo={todo}
                        key={id}
                        marcarConcluida={marcarConcluida}
                        removeTodo={removeTodo} />
                ))}

        </div> 
    );
};