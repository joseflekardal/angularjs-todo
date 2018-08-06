import TodoFormComponent from './todo-form/todo-form.component'
import TodoListComponent from './todo-list/todo-list.component'
import TodoFilterComponent from './todo-filter/todo-filter.component'
import TodoCountComponent from './todo-count/todo-count.component'
import TodoItemComponent from './todo-item/todo-item.component'
import TodoComponent from './todo.component'

export default angular
  .module('todo', [])
  .component('todo', TodoComponent)
  .component('todoForm', TodoFormComponent)
  .component('todoList', TodoListComponent)
  .component('todoFilter', TodoFilterComponent)
  .component('todoCount', TodoCountComponent)
  .component('todoItem', TodoItemComponent)
  .name
