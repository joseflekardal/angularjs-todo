import './todo-filter.scss'
import * as filterActions from './todo-filter.action'
import { bindActionCreators } from 'redux'

/* @ngInject */
class FilterComponent {
  constructor ($ngRedux, $scope) {
    const disconnect = $ngRedux.connect(
      state => ({ currentFilter: state.filter }),
      dispatch => bindActionCreators(filterActions, dispatch)
    )(this)

    $scope.$on('$destroy', disconnect)
  }
}

export default {
  transclude: true,
  bindings: {
    filter: '@'
  },
  template: `
    <li
      ng-class="{ 'active': $ctrl.filter === $ctrl.currentFilter }"
      ng-click="$ctrl.setFilter($ctrl.filter)">
      <ng-transclude></ng-transclude>
      <todo-count filter="$ctrl.filter"></todo-count>
    </li>
  `,
  controller: FilterComponent
}
