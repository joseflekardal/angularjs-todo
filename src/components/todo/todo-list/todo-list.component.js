import './todo-list.scss'

export default {
  transclude: true,
  template: `
    <ul>
      <ng-transclude></ng-transclude>
    </ul>
  `
}
