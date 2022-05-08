import  { useState } from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {MdOutlineDone} from 'react-icons/md'
import TodoForm from './TodoForm';


const Todo = ({todos, completeTodo, removeTodo, updateTodo})=>{
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
   
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <TodoForm  addTodo={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className = {todo.done ? 'todo-row complete' : 'todo-row'}
            key={index}>
                <div key={todo.id} onClick={ () => setEdit({id: todo.id, value: todo.text})}>
                    {todo.text}
                </div>
                <div className="icons">
                    <AiFillCloseCircle onClick= { () => removeTodo(todo.id)}/>
                    <MdOutlineDone onClick={ () => completeTodo(todo.id)}/>
                </div>
            
        </div>
    ))
}

export default Todo;