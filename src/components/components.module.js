import TodoModule from './todo/todo.module'
import AboutModule from './about/about.module'

export default angular
  .module('app.components', [ TodoModule, AboutModule ])
  .name
