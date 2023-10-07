import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { UserContextProvider } from './contexts/UserContext';
import ProductsContextProvider from './contexts/ProductsContext';
import UserDocsContextProvider from './contexts/UserDocsContext';
import NavbarRefProvider from './contexts/NavbarRefContext';
import ChangeProductContextProvider from './contexts/ChangeProductContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <UserContextProvider>

      <ProductsContextProvider>

        <UserDocsContextProvider>

          <NavbarRefProvider>
            <ChangeProductContextProvider>
            <App />
            </ChangeProductContextProvider>
          </NavbarRefProvider>
          
        </UserDocsContextProvider>
        
      </ProductsContextProvider>

    </UserContextProvider>
    
  </React.StrictMode>
);

reportWebVitals();
