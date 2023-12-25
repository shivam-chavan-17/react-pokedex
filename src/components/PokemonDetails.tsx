import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import usePokemon from '../Hooks/usePokemon'
import { Box, Button, Container, Grid } from '@mui/material'
import PokemonAvatar from './PokemonAvatar'
import PokemonBasicInfo from './PokemonBasicInfo'
import PokemonStats from './PokemonStats'

export const PokemonDetails = () => {
    let {pokemonName} = useParams()

    const {pokemon, isLoading} = usePokemon({pokemonName})

  return (
    <Container>
        <Grid container flexDirection="column" alignItems="center" justifyContent="center" spacing={2} mt={1}>
            <Grid container alignItems="center" justifyContent="center" spacing={2}>    
                {isLoading ? (
                    <Box>Loading...</Box>
                ) : pokemon ? (
                    <>
                        <Grid item xs={12} sm={6}>
                            <PokemonAvatar pokemon={pokemon}/>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <PokemonBasicInfo pokemon={pokemon}/>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <PokemonStats pokemon={pokemon}/>

                        </Grid>
                    </>
                ) :(
                    <Box>Pokemon not found</Box>
                )}
            </Grid>
            <Grid item>
                <Button component={Link} to={"/"} variant="contained">
                    Back
                </Button>
            </Grid>
        </Grid>
    </Container>
  )
}

export default PokemonDetails
