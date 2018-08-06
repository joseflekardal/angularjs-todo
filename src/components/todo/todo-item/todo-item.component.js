import { bindActionCreators } from 'redux'
import * as todoActions from '../todo.action'
import './todo-item.scss'

/* @ngInject */
class TodoItemComponent {
  constructor ($ngRedux, $scope) {
    let disconnect = $ngRedux.connect(
      state => ({ editingTodo: state.editingTodo }),
      this.mapDispatch
    )(this)
    
    $scope.$on('$destroy', disconnect)

    this.updatedTodo = ''
  }
  
  mapDispatch (dispatch) {
    return {
      ...bindActionCreators(todoActions, dispatch),
      saveTodo ({ id, text }) {
        dispatch(todoActions.saveTodo({ text, id }))
        dispatch(todoActions.exitTodoEdit())
      }
    }
  }
}

export default {
  bindings: {
    todo: '<'
  },
  template: `
    <li>
      <span
        ng-class="{ 'complete': $ctrl.todo.isComplete }"
        ng-click="$ctrl.toggleComplete($ctrl.todo.id)">
        {{ $ctrl.todo.text }}
      </span>
      <form
        ng-submit="$ctrl.saveTodo($ctrl.todo)"
        ng-if="$ctrl.editingTodo === $ctrl.todo.id">
        <input type="text" ng-model="$ctrl.todo.text">
        <button type="submit">Save</button>
      </form>
      <div class="todo-controllers">
        <span ng-click="$ctrl.editTodo($ctrl.todo.id)">✏️</span>
        <span ng-click="$ctrl.deleteTodo($ctrl.todo.id)">❌</span>
      </div>
    </li>
  `,
  controller: TodoItemComponent
}
