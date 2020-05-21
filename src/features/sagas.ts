
import { all } from 'redux-saga/effects'
import TodoSaga from './todo/TodoSaga'
import ShopSaga from './shop/ShopSaga'

export default function* () {
  yield all([
    TodoSaga(),
    ShopSaga(),
  ])
}
