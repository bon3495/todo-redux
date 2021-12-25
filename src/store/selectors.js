import { createSelector } from 'reselect';

export const todoListSelector = state => state.todoList;

export const searchTextSelector = state => state.filters.search;

export const filterStatusSelector = state => state.filters.status;

export const filterPrioritesSelector = state => state.filters.priorities;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritesSelector,
  (todoList, searchText, filterStatus, filterPriorites) => {
    if (filterStatus === 'All') {
      return todoList.filter(
        todo =>
          todo.name.includes(searchText) &&
          (filterPriorites.length > 0
            ? filterPriorites.includes(todo.priority)
            : true)
      );
    }

    return todoList.filter(todo => {
      return (
        todo.name.includes(searchText) &&
        (filterStatus === 'Completed' ? todo.completed : !todo.completed) &&
        (filterPriorites.length > 0
          ? filterPriorites.includes(todo.priority)
          : true)
      );
    });
  }
);
