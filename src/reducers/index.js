import { combineReducers } from 'redux'
import {
  ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_COMPLETE, SET_EDITING_TODO, SAVE_TODO
} from '../components/todo/todo.action'
import {
  SHOW_ALL, SET_FILTER
} from '../components/todo/todo-filter/todo-filter.action'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload)

    case TOGGLE_COMPLETE:
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      })

    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.text = text
        }
        return todo
      })

    case SAVE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text
        }
        return todo
      })

    default:
      return state
  }
}

const filter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload

    default:
      return state
  }
}

const editingTodo = (state = null, action) => {
  switch (action.type) {
    case SET_EDITING_TODO:
      return action.payload === state
        ? null
        : action.payload

    default:
      return state
  }
}

export default combineReducers({ todos, filter, editingTodo })
