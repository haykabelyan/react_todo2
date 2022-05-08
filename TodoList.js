import {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = ()=>{

    const [todos, setTodos] = useState([]);

    const addTodo = todo=>{
        if(!todo.text) return;
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const removeTodo = id=>{
        const removeTodo = [...todos].filter( todo=>{return todo.id !== id} );
        setTodos(removeTodo);
    }


    const completeTodo = id=>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id === id) todo.done = !todo.done;
            return todo;
        });
        setTodos(updatedTodos);
    }


    const updateTodo = (todoId, newValue)=>{
        if(!newValue.text) return;
        setTodos( prev=>prev.map( item=> item.id === todoId ? newValue: item ) );
    }

    return (
        <>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <Todo 
                todos={todos} 
                removeTodo={removeTodo}  
                completeTodo = {completeTodo}
                updateTodo={updateTodo}
            />
        </>
    );


}

export default TodoList;