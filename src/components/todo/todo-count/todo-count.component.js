import './todo-count.scss'

class TodoCountComponent {
  /* @ngInject */
  constructor ($ngRedux, $scope) {
    let disconnect = $ngRedux.connect(
      this.mapState.bind(this)
    )(this)

    $scope.$on('$destroy', disconnect)
  }

  mapState ({ todos, filter }) {
    switch (this.filter) {
      case 'SHOW_COMPLETED':
        return {
          count: todos
            .filter(todo => todo.isComplete)
            .length,
          currentFilter: filter
        }

      case 'SHOW_TODO':
        return {
          count: todos
            .filter(todo => !todo.isComplete)
            .length,
          currentFilter: filter
        }
      
      default:
        return {
          count: todos.length,
          currentFilter: filter
        }
    }
  }
}

export default {
  bindings: { filter: '<' },
  template: `
    <span
      ng-if="$ctrl.currentFilter !== $ctrl.filter"
      class="todo-count">
      {{ $ctrl.count }}
    </span>
  `,
  controller: TodoCountComponent
}
