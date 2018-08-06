import {
  SHOW_COMPLETED, SHOW_TODO, SHOW_ALL
} from './todo-filter/todo-filter.action'

class TodoComponent {
  /* @ngInject */
  constructor ($ngRedux, $scope) {
    let disconnect = $ngRedux.connect(
      this.mapState
    )(this)
    
    $scope.$on('$destroy', disconnect)
  }

  mapState ({ todos, filter }) {
    return {
      todos: todos.filter(todo => {
        switch (filter) {
          case SHOW_ALL:
            return true

          case SHOW_COMPLETED:
            return todo.isComplete

          case SHOW_TODO:
            return !todo.isComplete

          default:
            return true
        }
      })
    }
  }
}

export default {
  template: `
    <ul class="filter">
      <todo-filter filter="SHOW_TODO">Show todo</todo-filter>
      <todo-filter filter="SHOW_COMPLETED">Show completed</todo-filter>
      <todo-filter filter="SHOW_ALL">Show all</todo-filter>
    </ul>
    <todo-form></todo-form>
    <p ng-if="$ctrl.todos.length === 0" class="info-text">
      There are currently no todos in this list <span class="smiley">😚</span>
    </p>
    <todo-list>
      <todo-item
        class="slide"
        ng-repeat="todo in $ctrl.todos"
        todo="todo"></todo-item>
    </todo-list>
  `,
  controller: TodoComponent
}
