import React,{ useState } from "react";
import TodoList from "./TodoList";

 

const App = () => {

  const [inputList, setInputList] = useState(" ");
const [Items ,setItems] =useState([]);



  const itemEvent = (event)=>{
    setInputList(event.target.value);

  };

   const listOfItems = ()=>{
    setItems((oldItems) => {
      return [...oldItems,inputList];
     
    });
    setInputList("");
   };


   const delItems = (id)=> {
    console.log('deleted')
    setItems((oldItems) => {
      return oldItems.filter((arrEle,index) =>{
        return index !== id;
      })
    })
  };




  return(
    <>
  
<div className="main_div">
  <div className="center_div">

    <br/>
    <h1> ToDo List</h1>
    <br/>
    <input type="text" placeholder="Add an Item" onChange={itemEvent} value={inputList} />
    <button onClick={listOfItems}>  + </button>

    <ol>
    {/* <li>{inputList}</li> */}
    {
      Items.map((itemVal,index) =>{

      return  <TodoList 
       key={index} //props
       id={index} //props
       onSelect={delItems}
       text ={itemVal} //props
       
       />
      })
    }
    </ol>

  </div>  

</div>


    </>
  );
};
export default App