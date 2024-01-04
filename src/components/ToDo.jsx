import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDos } from "../store/reducer/todo";

const ToDo = () => {
  const dispatch = useDispatch();
  const toDos = useSelector(state => state.todo.data)
  const isLoading = useSelector(state=> state.todo.isLoading)
  const [userData, setUserData] = useState(1);
  const getTodoHandler = () => {
    dispatch(fetchToDos(userData));
  };
  return (
    <>
      <input type="number" min={1} max={200} value={userData} onChange={(e)=>{
        setUserData(e.target.value)
      }}/>
      <button onClick={getTodoHandler} >Get Info</button>

      <div>
        {isLoading && <p>loading data...</p>}
        { !isLoading && toDos.title}
      </div>
    </>
  );
};

export default ToDo;
