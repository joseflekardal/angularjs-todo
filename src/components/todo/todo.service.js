export default class TodoService {
  /* @ngInject */
  constructor ($resource) {
    this.Todos = $resource('https://jsonplaceholder.typicode.com/todos')
  }

  getTodos () {
    return this.Todos.query().$promise
  }
}
