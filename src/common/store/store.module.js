import ngRedux from 'ng-redux'
import rootReducer from '../../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

class StoreSetup {
  /* @ngInject */
  constructor ($ngReduxProvider) {
    $ngReduxProvider.createStoreWith(rootReducer, [ thunk, logger ])
  }
}

export default angular
  .module('store', [ ngRedux ])
  .config(StoreSetup)
  .name
