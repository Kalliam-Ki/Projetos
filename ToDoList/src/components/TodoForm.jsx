import react, {useState} from 'react';
import { Button } from './Button';

export const TodoForm = ({addTodo}) => {
        const [valor, setValor] = useState("");

        const pegarSubmit = evento => {
            evento.preventDefault();

            addTodo(valor);

            setValor(""); //Deixando o campo limpo
        //Passando o valor do evento para o TodoWrapper
        };

    return (
        <form className='TodoForm' onSubmit={pegarSubmit}>

            <input 
                type='text' 
                className='todo-input'
                placeholder='Qual a tarefa de hoje?'
                value={valor}
                onChange={(evento) => setValor(evento.target.value)} />

            <Button onClick={pegarSubmit}>
                Adicionar
            </Button>

        </form>   
    );
};