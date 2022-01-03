import React from "react";
import { Tooltip, IconButton, Link } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const FavoritePage = () => {
  return (
    <Tooltip label="Ouvir no Deezer">
      <Link href='/favorites' >
        <IconButton
          icon={<FaStar />}
          variant="ghost"
          color="current"
          marginLeft="2"
          size="md"
          mr="2"
          fontSize="20px"
        />
      </Link>
    </Tooltip>
  );
};

export default FavoritePage