import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../types'
import { Pokemon } from '../ShopTypes'
import './ShopCart.scss'

export default () => {
  const selectedPokemons = useSelector<State, Pokemon[]>((state) => state.shop.selectedPokemons)

  const renderList = () => selectedPokemons.map(({
    id, name, baseExperience, spriteUrl,
  }) => (
    <li key={id}>
      <img src={spriteUrl} alt={name} />
      <div className='info'>
        <strong>{name}</strong>
        <span>R$ {baseExperience}</span>
      </div>
    </li>
  ))

  return (
    <section id='shop-cart'>
      <h1>Carrinho</h1>
      <ul>
        {renderList()}
      </ul>
    </section>
  )
}
