import { bindActionCreators } from 'redux'
import * as todoActions from '../todo.action'
import {
  SHOW_COMPLETED, SHOW_TODO, SHOW_ALL
} from '../todo-filter/todo-filter.action'
import './todo-list.scss'

class TodoListComponent {
  /* @ngInject */
  constructor ($ngRedux, $scope) {
    let disconnect = $ngRedux.connect(
      this.mapState,
      bindActionCreators(todoActions, $ngRedux.dispatch)
    )(this)

    $scope.$on('$destroy', disconnect)
  }

  mapState (state) {
    return {
      todos: state.todos.filter(todo => {
        switch (state.filter) {
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
    <p ng-if="$ctrl.todos.length === 0" class="info-text">
      There are currently no todos in this list <span class="smiley">😚</span>
    </p>
    <ul>
      <li
        class="slide"
        ng-repeat="todo in $ctrl.todos">
        <span
          ng-class="{ 'complete': todo.isComplete }"
          ng-click="$ctrl.toggleComplete(todo.id)">
          {{ todo.text }}</span>
        <form ng-submit="">
          <input type="text" value="{{ todo.text }}">
          <button type="submit">Save</button>
        </form>
        <div class="delete-todo">
          <span ng-click="">✏️</span>
          <span ng-click="$ctrl.deleteTodo(todo.id)">❌</span>
        </div>
      </li>
    </ul>
  `,
  controller: TodoListComponent
}
