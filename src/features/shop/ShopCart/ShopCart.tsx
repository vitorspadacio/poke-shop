import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { State } from '../../types'
import { Pokemon } from '../ShopTypes'
import { Actions } from '../ShopActions'

import './ShopCart.scss'

export default () => {
  const dispatch = useDispatch()
  const selectedPokemons = useSelector<State, Pokemon[]>((state) => state.shop.selectedPokemons)

  const removePokemon = (id) => dispatch(Actions.removePokemon(id))

  const formattedPrice = (value: number) => value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const sumTotal = () => selectedPokemons.reduce(
    (accumulator, pokemon) => accumulator + pokemon.baseExperience, 0,
  )

  const renderList = () => selectedPokemons.map(({
    id, name, baseExperience, spriteUrl,
  }) => (
    <li key={id} onClick={() => removePokemon(id)}>
      <img src={spriteUrl} alt={name} />
      <div className='info'>
        <strong>{name}</strong>
        <span>{formattedPrice(baseExperience)}</span>
      </div>
    </li>
  ))

  const renderTotal = () => (selectedPokemons.length > 0 ? (
    <div className='total'>
      <span>Total</span>
      <strong>{formattedPrice(sumTotal())}</strong>
    </div>
  ) : undefined)

  return (
    <section id='shop-cart'>
      <h1>Carrinho</h1>
      <ul>
        {renderList()}
      </ul>
      {renderTotal()}
    </section>
  )
}
