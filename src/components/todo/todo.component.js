import './todo.scss'

class TodoComponent {
  /* @ngInject */
  constructor ($state, $ngRedux) {
    switch($state.params.filter) {
      case 'todo':
        return $ngRedux.dispatch({
          type: 'SET_FILTER',
          payload: 'SHOW_TODO'
        })

      case 'complete':
        return $ngRedux.dispatch({
          type: 'SET_FILTER',
          payload: 'SHOW_COMPLETED'
        })

      default:
        return false
    }
  }
}

export default {
  template: `
    <ul class="filter">
      <todo-filter type="SHOW_TODO">Show todo</todo-filter>
      <todo-filter type="SHOW_COMPLETED">Show completed</todo-filter>
      <todo-filter type="SHOW_ALL">Show all</todo-filter>
    </ul>
    <todo-form></todo-form>
    <todo-list></todo-list>
  `,
  controller: TodoComponent
}
