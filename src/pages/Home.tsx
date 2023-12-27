import usePokemons from "../Hooks/usePokemons";
import Pokemonlist from "../components/Pokemonlist";
import {
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { IndexedType } from "../interface/pokemon.interface";
import { useState } from "react";

const Home = () => {
  const {
    pokemons,
    hasMorePokemon,
    fetchNextPage,
    pokemonTypes,
    setSelectedType,
    selectedType,
    setPokemons,
  } = usePokemons();

  const [search, setSearch] = useState("");

  const handleSelectType = (type: IndexedType | null) => {
    if (type) {
      setSelectedType(type);
    } else {
      setPokemons([]);
      setSelectedType(null);
    }
  };

  const handleSearch = () => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setPokemons(filteredPokemons);
  };

  return (
    <Container>
      <Grid container spacing={2} mt={1}>
          <Grid
            container
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "left",
              marginBottom: { xs: 1, md: 0 },
            }}
          >
            <TextField
              label="Search Pokemon"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="contained" onClick={handleSearch}>
              Search
            </Button>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "right",
              marginBottom: { xs: 1, md: 0 },
            }}
          >
            <Select value={selectedType || ""}>
              {pokemonTypes.map((type) => (
                <MenuItem onClick={() => handleSelectType(type)}>
                  {type.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Pokemonlist pokemons={pokemons}></Pokemonlist>
          {hasMorePokemon ? (
            <Button variant="contained" onClick={fetchNextPage}>
              Load More Pokemon
            </Button>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
