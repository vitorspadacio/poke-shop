import React from 'react'
import { useSelector } from 'react-redux'

import { State } from '../../types'
import { Pokemon } from '../ShopTypes'

import ShopCard from '../ShopCard'

import './ShopList.scss'

export default () => {
  const pokemons = useSelector<State, Pokemon[]>((state) => state.shop.pokemons)

  return (
    <section id='shop-list'>
      {pokemons.map(({
        id, name, spriteUrl, baseExperience,
      }) => (
        <ShopCard
          key={id}
          id={id}
          name={name}
          image={spriteUrl}
          price={baseExperience}
        />
      ))}
    </section>
  )
}
