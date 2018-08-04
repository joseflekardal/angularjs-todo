export const SET_FILTER = 'SET_FILTER'
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_TODO = 'SHOW_TODO'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
})
