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
    };

    const removeTodo = (id) => {

        const novosTodos = todos.filter(todo => todo.id !== id);

        setTodos(novosTodos);

    };

    const toggleComplete = (id) => {

        setTodos(todos.map(todo => todo.id === id ?
            {...todo, concluida: !todo.concluida} 
            : todo
        ));

    };
    

    return (
        <div className='TodoWrapper'>

            <h1>Lista de Tarefas</h1>

            <TodoForm addTodo={addTodo} />
            
            {todos.map((todo, index) => (

                <Todo 
                    todo={todo}
                    key={index}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo} />
            ))}
            
        </div> 
    );
};