import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Actions } from '../ShopActions'

import ShopList from '../ShopList'
import ShopCart from '../ShopCart'
import ShopSearch from '../ShopSearch/ShopSearch'

import './ShopPage.scss'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Actions.getPokemons())
  }, [dispatch])
  return (
    <section id='shop-page'>
      <ShopSearch />
      <ShopList />
      <ShopCart />
    </section>
  )
}
