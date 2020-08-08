import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { logger } from 'redux-logger'

import rootReducer from './rootReducer'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [logger]

const store = createStore(
    persistedReducer,
    applyMiddleware(...middlewares)
)

const persistor = persistStore(store)
export { store, persistor }