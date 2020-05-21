
import { combineReducers } from 'redux'
import HomeReducer from './home/HomeReducers'
import TodoReducer from './todo/TodoReducer'
import ShopReducer from './shop/ShopReducer'

export default combineReducers({
  home: HomeReducer,
  todo: TodoReducer,
  shop: ShopReducer,
})
