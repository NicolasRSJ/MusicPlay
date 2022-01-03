import React from "react";
import { Box, Heading, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import ListOfSongsFavorites from "components/ListOfSongsFavorites";
import { useSelector } from 'react-redux'

const Favorites = () => {

  const data = useSelector(state => state.addFavorites)

  return (
    <>
      <Heading
        as="h2"
        textAlign="center"
        paddingTop="1rem"
        bgGradient="linear(to-b, #7928CA,#FF0080)"
        bgClip="text"
        fontFamily="Montserrat"
        fontWeight="400"
        textShadow="1px 1px 5px rgba(0,0,0,0.2)"
      >
        <Icon as={FaStar} color="#7928CA" /> Músicas Favoritas:
      </Heading>
      <Box paddingX="1rem">
          <ListOfSongsFavorites songs={data} />
      </Box>
    </>
  );
};

export default Favorites;