import React, { useState } from "react";
import Todoinput from "./componetes/Todoinput";
import "./App.css";
import Todolist from "./componetes/Todolist";
function App() {
  const [listTodo, setListTodo] = useState([]);
  const addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = (key)=>{
    // if(listTodo!=='')
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  
  return (
    <div className="main-container">
      <div className="conter-container">
        <Todoinput addList={addList} />
        <h1 className="app-heading">TODO LIST</h1>
        <hr />
        {
          listTodo.map((listItem,i)=>{
            
            return(
              <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
