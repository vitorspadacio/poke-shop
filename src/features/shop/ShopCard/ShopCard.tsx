import React from 'react'
import { useDispatch } from 'react-redux'
import { Actions } from '../ShopActions'
import './ShopCard.scss'

interface Props {
  id: number,
  name: string,
  image: string,
  price: number,
}

export default ({
  id, name, image, price,
}: Props) => {
  const dispatch = useDispatch()

  const formattedPrice = () => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const handleClick = (pokemonId) => {
    dispatch(Actions.addPokemon(pokemonId))
  }

  return (
    <section className='shop-card'>
      <img src={image} alt={name} />
      <strong>{name}</strong>
      <span>{formattedPrice()}</span>
      <button type='button' onClick={() => handleClick(id)}>Comprar</button>
    </section>
  )
}
