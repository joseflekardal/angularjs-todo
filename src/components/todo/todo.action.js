export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'
export const SET_EDITING_TODO = 'SET_EDITING_TODO'
export const SAVE_TODO = 'SAVE_TODO'

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

export const editTodo = (id) => ({
  type: SET_EDITING_TODO,
  payload: id
})

export const saveTodo = (payload) => ({
  type: SAVE_TODO,
  payload
})

export const exitTodoEdit = () => ({
  type: SET_EDITING_TODO,
  payload: null
})
