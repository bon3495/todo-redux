export const addTodo = todo => {
  return {
    type: 'todoList/addTodo',
    payload: todo,
  };
};

export const changeStatusTodo = id => {
  return {
    type: 'todoList/changeStatusTodo',
    payload: id,
  };
};

export const searchFilterChange = text => {
  return {
    type: 'filters/searchFilterChange',
    payload: text,
  };
};

export const statusFilterChange = status => {
  return {
    type: 'filters/statusFilterChange',
    payload: status,
  };
};

export const prioritiesFilterChange = priorities => {
  return {
    type: 'filters/prioritiesFilterChange',
    payload: priorities,
  };
};
