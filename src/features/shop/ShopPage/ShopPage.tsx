import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Actions } from '../ShopActions'

import ShopList from '../ShopList'
import ShopCart from '../ShopCart'

import './ShopPage.scss'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.getPokemons())
  }, [dispatch])
  return (
    <section id='shop-page'>
      <ShopList />
      <ShopCart />
    </section>
  )
}
