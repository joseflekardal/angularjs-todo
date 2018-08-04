import TodoFormComponent from './todo-form/todo-form.component'
import TodoListComponent from './todo-list/todo-list.component'
import FilterComponent from './todo-filter/todo-filter.component'
import TodoCountComponent from './todo-count/todo-count.component'
import TodoComponent from './todo.component'
import TodoService from './todo.service'

export default angular
  .module('todo', [])
  .component('todo', TodoComponent)
  .component('todoForm', TodoFormComponent)
  .component('todoList', TodoListComponent)
  .component('todoFilter', FilterComponent)
  .component('todoCount', TodoCountComponent)
  .service('TodoService', TodoService)
  .name
