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
        },
        changeTextTodo(state, action) {
            state.todos = state.todos.map(todo => 
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
        }
    }
})

export const { addTodo, filteredToDos, changeTextTodo } = todosSlice.actions
export default todosSlice.reducer