export interface Pokemon {
  id: number,
  name: string,
  baseExperience: number,
  spriteUrl: string,
}

export interface ShopState {
  pokemons: Pokemon[],
  selectedPokemons: Pokemon[],
}
