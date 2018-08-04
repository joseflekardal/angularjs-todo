import './todo-filter.scss'
import * as filterActions from './todo-filter.action'
import { bindActionCreators } from 'redux'

class FilterComponent {
  /* @ngInject */
  constructor ($ngRedux, $scope) {
    const disconnect = $ngRedux.connect(
      this.mapState,
      bindActionCreators(filterActions, $ngRedux.dispatch)
    )(this)
    
    $scope.$on('$destroy', disconnect)
  }

  mapState ({ filter }) {
    return { filter }
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
      ng-click="$ctrl.setFilter($ctrl.type)">
      <ng-transclude></ng-transclude>
      <todo-count filter="$ctrl.type"></todo-count>
    </li>
  `,
  controller: FilterComponent
}
