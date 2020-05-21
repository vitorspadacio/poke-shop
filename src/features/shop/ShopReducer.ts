import { Types } from './ShopActions'
import { ShopState, Pokemon } from './ShopTypes'

const INITIAL_STATE: ShopState = {
  pokemons: [],
  selectedPokemons: [],
}

const setPokemons = (state, pokemons: Pokemon[]) => ({ ...state, pokemons })

const addPokemon = (state, pokemonId: number) => {
  const selectedPokemon = state.pokemons.find((pokemon) => pokemon.id === pokemonId)
  return { ...state, selectedPokemons: [...state.selectedPokemons, selectedPokemon] }
}

const removePokemon = (state, pokemonId: number) => {
  const index = state.selectedPokemons.findIndex(({ id }) => id === pokemonId)
  const newSelectedPokemons = [
    ...state.selectedPokemons.slice(0, index),
    ...state.selectedPokemons.slice(index + 1),
  ]
  return { ...state, selectedPokemons: newSelectedPokemons }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SetPokemons:
      return setPokemons(state, action.pokemons)

    case Types.AddPokemon:
      return addPokemon(state, action.pokemonId)

    case Types.RemovePokemon:
      return removePokemon(state, action.pokemonId)

    default:
      return state
  }
}
