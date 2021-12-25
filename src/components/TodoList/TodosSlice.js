import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Learn Popping',
    priority: 'Low',
    completed: true,
  },
  {
    id: 2,
    name: 'Learn React',
    priority: 'Medium',
    completed: false,
  },
  {
    id: 3,
    name: 'Learn Redux',
    priority: 'High',
    completed: false,
  },
];

// const todoListReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return [...state, action.payload];

//     case 'todoList/changeStatusTodo':
//       const newState = [...state];
//       const todo = newState.find(t => t.id === action.payload);
//       todo.completed = !todo.completed;
//       return [...newState];
//     default:
//       return state;
//   }
// };

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    changeStatusTodo(state, action) {
      const currentTodo = state.find(todo => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});

export const { addTodo, changeStatusTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
