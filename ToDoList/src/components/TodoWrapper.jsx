import react, {useState} from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';


export const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);

    //Colocar emoji e categoria q sera adicionado com o modal
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
    
    //Adicionar tbm emoji e categoria
    //Caso esteja concluida, a categoria e emoji precisam sumir e a cor deve ficar mais "apagada"

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