import { useState } from "react";

const TodoList = () => {

  const [data,setData] = useState("");
  const [store,setStore] = useState([])
  const [task,setTask] = useState([])

  const handleList = () => {
   
    const currentTime = Date.now();

     setStore([
        ...store
        ,
        {
        message : data,
        id :currentTime.toString(),
     }]);
     
     setData("");
  }

const changeStatus = (id) => {
  const findList = store.find((list) => list.id === id);
  setTask([...task,findList]);
  const newList = store.filter((list) => list.id !== id);
  setStore(newList);
}

 return (
    <>
    <h1>
        TODOLIST
    </h1>


       <div>
       <p>List</p>

        <input type="text" name="List" id="List" 
        value={data} 
        onChange={(e) => {setData(e.target.value)}} 
        />
        <button onClick={() => {handleList()}}>submit</button>

        <p>
        List : {data}
        </p>

        
       </div>
        {store.map((list) => {
            const {message,id} = list;
          return (
                <li key={id}>
                 {message}
                 <button onClick={() => changeStatus(id)}>complete</button>
                </li>               
          )
        })}
       <div>

        <h1>Completed Tasks</h1>
        <div>

          <ul>
            {task.map((completedTasks) => {
              return (
                <div key={completedTasks.id}>
                    <p>
                        {completedTasks.message}
                    </p>
                </div>
              )
            })}
          </ul>

        </div>
       </div>
      
    </>
 )
}
export default TodoList;