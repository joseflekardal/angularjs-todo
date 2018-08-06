import ngRedux from 'ng-redux'
import rootReducer from '../../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default angular
  .module('store', [ ngRedux ])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(rootReducer, [ thunk, logger ])
  })
  .name
