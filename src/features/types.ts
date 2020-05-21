import { TodoState } from './todo/TodoTypes'
import { ShopState } from './shop/ShopTypes'

export interface State {
  todo: TodoState,
  shop: ShopState,
}
