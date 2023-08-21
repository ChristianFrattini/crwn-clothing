import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts (deprecated)/user.context.jsx'  //user context. allows specified component to access data
import { CategoriesProvider} from './contexts (deprecated)/categories.context.jsx';
import { CartProvider } from './contexts (deprecated)/cart.context.jsx';
import { Provider } from 'react-redux'; //redux provider
import {store, persistor} from './store/store.js' 
import { PersistGate } from 'redux-persist/integration/react';

//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( //nest the app into the browser router packages
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}> 
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
