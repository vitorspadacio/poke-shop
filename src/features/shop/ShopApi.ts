import axios from 'axios'
import { Pokemon } from './ShopTypes'

export default {
  getPokemons: async (): Promise<Pokemon[]> => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    return Promise.all(data.results.map(async (pokePromise) => {
      const { data: pokemon } = await axios.get(pokePromise.url)
      return {
        id: pokemon.id,
        name: pokemon.name,
        baseExperience: pokemon.base_experience,
        spriteUrl: pokemon.sprites.front_default,
      }
    }))
  },
}
