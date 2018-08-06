/* @ngInject */
export default class AboutService {
  constructor ($resource) {
    this.About = $resource('https://api.github.com/repos/joseflekardal/angularjs-todo')
  }

  getReadme () {
    return this.About.get().$promise
  }
}
