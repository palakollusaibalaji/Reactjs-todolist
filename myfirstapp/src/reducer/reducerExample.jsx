
import React, { Fragment, useReducer } from "react";

const reducer = (state,action) => {
if(action.type === "DELETE_PERSON") {
    const newPersons = state.data.filter((eachDetails) => {
       return eachDetails.id !== action.payload;
    });

    return {
        ...state,
        data : newPersons,
        length : state.length - 1
    }
}

 throw new Error("action not found");

}


const ReducerExample1 = () => {

const initialState = {
    data :  [{
        id:"i93049",Name : "sai",email : "saigmail.com"
    },
    {
        id:"83353",Name : "mohan",email : "mohangmail.com"
    }
],
length : 2,
}

const [state,dispatch] = useReducer(reducer,initialState);

const handleDelete = (id) => {
    dispatch ({
        type : "DELETE_PERSON",
        payload : id,
    })
}

const handleAdd = (id) => {

}

return (
    <>
    <h1>{state.length}</h1>
    <h1>
        {state?.data.map((eachData) => {
          const {id,Name,email} = eachData;
          return (
           <>
           <div key={id}>
           <p>{Name}</p>
           <p>{email}</p>
           <button onClick={() => handleDelete(id)}>delete</button>
           <button onClick={() => {handleAdd(id)}}>add</button>
           </div>
           </>
          )
        })}
    </h1>
    </>
)
};

export default ReducerExample1;

