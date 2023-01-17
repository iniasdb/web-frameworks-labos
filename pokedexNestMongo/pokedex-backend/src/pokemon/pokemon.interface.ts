export interface Pokemon {
  pokemon: PokemonData
}

export interface PokemonData {
    id: string;
    species_id: string;
    height: string;
    weight: string;
    base_experience: string;
    order: string;
    is_default: string;
    name: string;
    sprites: Sprites;
  }
  
export interface Sprites {
normal: string;
animated: string;
}