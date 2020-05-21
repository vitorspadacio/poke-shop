import { call, takeEvery, put } from 'redux-saga/effects'
import ShopApi from './ShopApi'
import { Actions, Types } from './ShopActions'

function* getPokemons() {
  try {
    const pokemons = yield call(ShopApi.getPokemons)
    yield put(Actions.setPokemons(pokemons))
  } catch {
    console.log('Ocorreu um erro')
  }
}

export default function* () {
  yield takeEvery(Types.GetPokemons, getPokemons)
}
