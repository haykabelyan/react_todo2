import { useState, useEffect, useRef } from "react";


const TodoForm = ({addTodo})=>{
    const [input, setInput] = useState('');
    const inputRef = useRef(null);    

    useEffect(()=>{
        console.log('++++++++++++++++++++++++++');
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo({
            id: Math.floor( Math.random() *10000),
            text: input,
            done: false
        });
        setInput('');
    }

    const handleChange = (e)=>{
        console.log(e.target.value);
        setInput(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Add a todo" 
                value={input} 
                onChange={handleChange} 
                ref={inputRef}
            />
            <input type="submit" value="ADD TODO" />
        </form>
    );

}

export default TodoForm;