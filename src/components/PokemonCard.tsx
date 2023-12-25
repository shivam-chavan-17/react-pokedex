import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import {
  IndexedPokemon,
  ListPokemon,
  PokemonListResponse,
} from "../interface/pokemon.interface";
import { useEffect, useState } from "react";
import { getColorFromUrl } from "../utils/colors";
import { Policy } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface PockemonCardProps {
  pokemon: ListPokemon;
}
const PokemonCard = ({ pokemon }: PockemonCardProps) => {
  const [pokemonColor, setPokemonColor] = useState<string | null>(null);

  const getPokemonColor = async () => {
    const color = await getColorFromUrl(pokemon.image);
    if (color) {
      setPokemonColor(color);
    }
  };

  useEffect(() => {
    getPokemonColor();
  }, []);

  return (
    <Card sx={{ backgroundColor: pokemonColor }}>
      <CardActionArea>
        <Link to={`pokemon/${pokemon.name}`}>
          <CardMedia
            component="img"
            image={pokemon.image}
            title={pokemon.image}
            sx={{ height: 100, objectFit: "contain" }}
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
              }}
            >
              <Typography sx={{ textTransform: "capitalize" }}>
                {pokemon.name}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }}>
                #{pokemon.pokedexNumber}
              </Typography>
            </Box>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
