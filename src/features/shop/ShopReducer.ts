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

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SetPokemons:
      return setPokemons(state, action.pokemons)

    case Types.AddPokemon:
      return addPokemon(state, action.pokemonId)

    default:
      return state
  }
}
