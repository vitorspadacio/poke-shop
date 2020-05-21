import { Pokemon } from './ShopTypes'

export const Types = {
  GetPokemons: 'GET_POKEMONS',
  SetPokemons: 'SET_POKEMONS',
  AddPokemon: 'ADD_POKEMON',
  RemovePokemon: 'REMOVE_POKEMON',
}

export const Actions = {
  getPokemons: () => ({ type: Types.GetPokemons }),
  setPokemons: (pokemons: Pokemon[]) => ({ type: Types.SetPokemons, pokemons }),
  addPokemon: (pokemonId: number) => ({ type: Types.AddPokemon, pokemonId }),
  removePokemon: (pokemonId: number) => ({ type: Types.RemovePokemon, pokemonId }),
}
