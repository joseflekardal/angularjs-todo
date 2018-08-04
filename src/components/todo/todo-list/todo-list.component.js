import {
  deleteTodo, toggleComplete, SHOW_COMPLETED, SHOW_TODO, SHOW_ALL
} from '../todo.action'
import './todo-list.scss'

class TodoListComponent {
  /* @ngInject */
  constructor ($ngRedux, $scope) {
    let disconnect = $ngRedux.connect(
      this.mapState,
      this.mapDispatch
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

  mapDispatch (dispatch) {
    return {
      onDeleteTodo (id) {
        dispatch(deleteTodo(id))
      },

      onToggleComplete (id) {
        dispatch(toggleComplete(id)) 
      }
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
          ng-click="$ctrl.onToggleComplete(todo.id)">
          {{ todo.text }}</span>
        <form ng-submit="">
          <input type="text" value="{{ todo.text }}">
          <button type="submit">Save</button>
        </form>
        <div class="delete-todo">
          <span ng-click="">✏️</span>
          <span ng-click="$ctrl.onDeleteTodo(todo.id)">❌</span>
        </div>
      </li>
    </ul>
  `,
  controller: TodoListComponent
}
