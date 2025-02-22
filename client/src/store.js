import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./components/redux/reducers/productReducer"; // Path to the reducer
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default is localStorage

const persistConfig = {
    key: 'root', // Name of the storage key
    storage,     // We are using localStorage for persistence
    whitelist: ['products'], // Only persist the 'products' reducer
  };

const persistedReducer = persistReducer(persistConfig, productsReducer);

const store = configureStore({
  reducer: {
    products: persistedReducer, // Add the products reducer to the store
  },
});

const persistor = persistStore(store); 

export { store, persistor }; 