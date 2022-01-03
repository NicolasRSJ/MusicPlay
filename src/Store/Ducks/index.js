import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addSong = createAction('ADD_SONG');
export const removeSong = createAction('REMOVE_SONG');

export default createReducer(INITIAL_STATE, {
	[addSong.type]: (state, action) => [ ...state, action.payload ],
	[removeSong.type]: (state, action) => state.filter((item) => item.id !== action.payload.id)
});