import React from "react";
import { Tooltip, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { removeSong } from 'Store/Ducks'

const ButtonRemoveFavorites = ({ song }) => {

    const dispatch = useDispatch()

    const handlerClick = () => dispatch(removeSong(song))

    return (
        <Tooltip label="Remover Dos Favoritos">
            <IconButton
                colorScheme="red"
                icon={<FaTrash color="current" />}
                isRound={true}
                size="md"
                mr="2"
                onClick={handlerClick}
            />
        </Tooltip>
    );
};

export default ButtonRemoveFavorites;