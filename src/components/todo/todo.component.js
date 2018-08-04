import './todo.scss'

export default {
  template: `
    <ul class="filter">
      <todo-filter filter="SHOW_TODO">Show todo</todo-filter>
      <todo-filter filter="SHOW_COMPLETED">Show completed</todo-filter>
      <todo-filter filter="SHOW_ALL">Show all</todo-filter>
    </ul>
    <todo-form></todo-form>
    <todo-list></todo-list>
  `
}
