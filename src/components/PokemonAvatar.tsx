import React, { useEffect, useState } from "react";
import { DetailPokemon } from "../interface/pokemon.interface";
import { getColorFromUrl } from "../utils/colors";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  colors,
} from "@mui/material";

interface PokemonAvatarProps {
  pokemon: DetailPokemon;
}

export const PokemonAvatar = ({ pokemon }: PokemonAvatarProps) => {
  const [pokemonColor, setPokemonColor] = useState<string | null>(null);

  // useEffect(()=>{
  //     getPokemonColor()
  // }, [])

  return (
    <Card sx={{ backgroundColor: pokemon.color }}>
      <CardMedia
        component="img"
        sx={{ height: 100, objectFit: "contain" }}
        image={pokemon.sprites.other["official-artwork"].front_default}
        title={pokemon.name}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ textTransform: "capitalize", color: "black" }}>
            {pokemon.name}
          </Typography>
          <Typography sx={{ textTransform: "capitalize", color: "black" }}>
            #{pokemon.id}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default PokemonAvatar;
