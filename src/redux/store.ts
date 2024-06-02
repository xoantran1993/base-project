import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import rootReducers from './root-reducer';
import rootSaga from './root-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  // options
});
const persistConfig = {
  storage: AsyncStorage,
  key: 'Sellonboard',
  whitelist: ['loginReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
