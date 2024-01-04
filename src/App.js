import React, {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo'
const style = {
  bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#EBB8DD] to-[#CAE7D3]`
}

function App() {
  const [todos,setTodos] = useState(['Learn React', 'Grind LC'])
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 classname={style.heading}>To Do App</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add todo" />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index)=>(
            <Todo key={index} todo={todo}/>
          ))}
          
        </ul>
        <p classnmae={style.count}>You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
