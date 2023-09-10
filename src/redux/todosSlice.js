import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        filteredToDos(state, action) {

            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            console.log(state.todos);
            console.log(action.payload);
        }
    }
})

export const { addTodo, filteredToDos } = todosSlice.actions
export default todosSlice.reducer