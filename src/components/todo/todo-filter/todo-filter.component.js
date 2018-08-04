import './todo-filter.scss'

class FilterComponent {
  /* @ngInject */
  constructor ($ngRedux, $scope) {
    const disconnect = $ngRedux.connect(
      this.mapState,
      this.mapDispatch
     )(this)
    
    $scope.$on('$destroy', disconnect)
  }

  mapState ({ filter }) {
    return { filter }
  }

  mapDispatch (dispatch) {
    return {
      onSetFilter (filter) {
        dispatch({
          type: 'SET_FILTER',
          payload: filter
        })
      }
    }
  }
}

export default {
  transclude: true,
  bindings: {
    type: '@'
  },
  template: `
    <li
      ng-class="{ 'active': $ctrl.type === $ctrl.filter }"
      ng-click="$ctrl.onSetFilter($ctrl.type)">
      <ng-transclude></ng-transclude>
      <todo-count filter="$ctrl.type"></todo-count>
    </li>
  `,
  controller: FilterComponent
}
