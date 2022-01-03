import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
 
import addFavorites from 'Store/Ducks'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const rootReducer = combineReducers({
    addFavorites,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const Store = createStore(persistedReducer)
export const Persistor = persistStore(Store)

export default Store