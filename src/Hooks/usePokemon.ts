import { useEffect, useState } from "react";
import { DetailPokemon } from "../interface/pokemon.interface";
import { POKEMON_API_BASE_URL, POKEMON_API_POKEMON_URL } from "../constants";
import { httpClient } from "../components/api/httpClient";
import { getColorFromUrl } from "../utils/colors";
import { Card, CardContent, CardMedia, colors } from "@mui/material";

interface UsePokemonprops {
  pokemonName: string | undefined;
}

const usePokemon = ({ pokemonName }: UsePokemonprops) => {
  const [pokemon, setPokemon] = useState<DetailPokemon | null>(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (pokemonName) {
      fetchPokemon();
    }
  }, [pokemonName]);

  useEffect(() => {
    if (pokemon) {
      getPokemonColor();
    }
  }, [pokemon]);

  const getPokemonColor = async () => {
    if (pokemon?.sprites?.other["official-artwork"]?.front_default) {
      const color = await getColorFromUrl(
        pokemon.sprites.other["official-artwork"].front_default
      );

      if (color) setPokemon({ ...pokemon, color });
    }
  };

  const fetchPokemon = async () => {
    if (pokemonName) {
      setIsloading(true);
      const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
      const result = await httpClient.get<DetailPokemon>(url);
      if (result?.data) {
        setPokemon(result.data);
      }
      setIsloading(false);
    }
  };
  return {
    pokemon,
    isLoading,
  };
};

export default usePokemon;
