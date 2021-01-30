import './main.scss'

import uiRouter from '@uirouter/angularjs'
import ngAnimate from 'angular-animate'
import ngResource from 'angular-resource'
import ComponentsModule from './components/components.module'
import CommonModule from './common/common.module'
import ngReduxRouter from 'redux-ui-router'

import AppComponent from './app.component'

export default angular
  .module('app', [
    uiRouter,
    ngAnimate,
    ngResource,
    ComponentsModule,
    CommonModule,
    ngReduxRouter
  ])
  .component('app', AppComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject'

    $stateProvider
      .state('home', {
        url: '/',
        component: 'todo'
      })
      .state('about', {
        url: '/about',
        component: 'about'
      })

    $urlRouterProvider.otherwise('/')
  })
