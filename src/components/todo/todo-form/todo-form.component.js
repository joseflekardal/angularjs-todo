import { addTodo } from '../todo.action'
import './todo-form.scss'

/* @ngInject */
class TodoFormComponent {
  constructor ($ngRedux, $scope) {
    let disconnect = $ngRedux.connect(
      null,
      this.mapDispatch
    )(this)

    $scope.$on('$destroy', disconnect)

    this.newTodo = ''
  }

  mapDispatch (dispatch) {
    return {
      onAddTodo () {
        if (this.newTodo === '') return
        dispatch(addTodo(this.newTodo))
        this.newTodo = ''
      }
    }
  }
}

export default {
  template: `
    <form ng-submit="$ctrl.onAddTodo()">
      <input
        type="text"
        ng-model="$ctrl.newTodo"
        placeholder="Add a todo..."
        autofocus>
      <button type="submit">Add</button>
    </form>
  `,
  controller: TodoFormComponent
}
