import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context'  //user context. allows specified component to access data
import { ProductsProvider} from './contexts/products.context.jsx';

//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( //nest the app into the browser router packages
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
