export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_TODO = 'SHOW_TODO'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    createdAt: new Date(),
    isComplete: false,
    text
  }
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
})

export const toggleComplete = (id) => ({
  type: TOGGLE_COMPLETE,
  payload: id
})

