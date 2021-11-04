import { createStore }  from 'redux'
import reducers from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig : any = {
    key: 'reducers',
    storage: storage,
  };
  
const pReducer = persistReducer(persistConfig, reducers);
const store : any = createStore(pReducer);
const persistor = persistStore(store);

export { persistor, store };