import AboutComponent from './about.component'
import AboutService from './about.service'

export default angular
  .module('about', [])
  .component('about', AboutComponent)
  .service('AboutService', AboutService)
  .name
