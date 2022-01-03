import React from "react";
import { Tooltip, IconButton } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { addSong } from 'Store/Ducks'

const ButtonAddFavorites = ({ song }) => {

    const dispatch = useDispatch()

    const handlerClick = () => dispatch(addSong(song))

    return (
        <Tooltip label="Adicionar Nos Favoritos">
            <IconButton
                colorScheme="yellow"
                icon={<FaStar color="current" />}
                isRound={true}
                size="md"
                mr="2"
                onClick={handlerClick}
            />
        </Tooltip>
    );
};

export default ButtonAddFavorites;
