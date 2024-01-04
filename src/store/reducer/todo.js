import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchToDos = createAsyncThunk("fetchToDos",async (num) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + num);
    return res.json();
  } catch (err) {
    return err;
  }
})

const initialTodoState = {
  isLoading : false,
  data : [],
  hasError : false,
}

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  extraReducers: (builder) => {
    builder.addCase(fetchToDos.pending , (state)=> {
      state.isLoading= true;
    })
    builder.addCase(fetchToDos.fulfilled, (state, action) =>{
      state.data = action.payload;
      state.isLoading = false;
      state.hasError = false;
    })
    builder.addCase(fetchToDos.rejected,(state)=>{
      state.isLoading = false;
      state.hasError = fasle;
    })
  }
})

export default todoSlice.reducer;