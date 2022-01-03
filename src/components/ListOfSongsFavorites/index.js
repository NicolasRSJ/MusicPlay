import React from "react";
import { Grid } from "@chakra-ui/react";
import SongFavorite from 'components/SongFavorite'

const ListOfSongsFavorites = ({ songs }) => {

  return (
    <Grid 
      templateColumns={{
        base: "1fr",
        lg: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      gap={3}
      marginTop="5"
    >
      {songs.map((song) => (
        <SongFavorite key={song.id} song={song}/>
      ))}
    </Grid>
  );
};

export default React.memo(ListOfSongsFavorites);