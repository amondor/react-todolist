import { useState } from "react";
import Item from './Item'
import {v4 as uuidv4} from 'uuid'

export default function Form(){

    const [dataArr, setDataArr] = useState ([
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Sport", id: uuidv4()},
        {txt: "Coder une app react" ,id: uuidv4()},
    ])

    const [stateInput , setStateInput] = useState();
    const deleteElement = id => {
       // console.log(id);
        const FilteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr (FilteredState)
    }
    const addTodo = e => {
        e.preventDefault();
        const newArr = [...dataArr]
        
        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4()
        
        newArr.push(newTodo);
        setDataArr(newArr);
        
        setStateInput('');
        
    }
    const linkedInput = e => {
       setStateInput(e)
    }
    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form  onSubmit={ e=> addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-lael mt-3">Things to do</label>
                <input 
                value={stateInput}
                onInput={e => linkedInput(e.target.value)}
                type="text" 
                className="form-control" 
                id="todo"
                />

                <button className="mt-2 btn btn-primary d-block">Add</button>
            </form>

            <h2>List of things to do: </h2>
            <ul className="list-group">
               {dataArr.map((item) =>{
                    return(
                        <Item  
                        txt ={item.txt}
                        key={item.id}
                        delFunc = {deleteElement}
                        id = {item.id}
                
                        />
                    )
                })}
            </ul>
        </div>
    )

}