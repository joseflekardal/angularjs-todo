export default class AboutService {
  /* @ngInject */
  constructor ($resource) {
    this.About = $resource('https://api.github.com/repos/joseflekardal/angularjs-todo')
  }

  getReadme () {
    return this.About.get().$promise
  }
}
