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

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload];

    case 'todoList/changeStatusTodo':
      const newState = [...state];
      const todo = newState.find(t => t.id === action.payload);
      todo.completed = !todo.completed;
      return [...newState];
    default:
      return state;
  }
};

export default todoListReducer;
