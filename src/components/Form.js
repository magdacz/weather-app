import React from 'react';
import App from './App';

const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input 
            type="text" 
            value={props.value} 
            placeholder="Wpisz miasto" 
            onChange={props.change}
            />
            <button>Wyszukaj miasto</button>
        </form>
    )
}

export default Form;