import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './context/AuthContext.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import ScrollToTop from './utils/ScrollToTop.js';
import store from './redux/store.js';
import './styles/global.scss';
export { default as Home } from "../src/components/Home/Home.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Provider store={store} stabilityCheck="none">
          <ScrollToTop />
          <App />
        </Provider>
      </BrowserRouter>
    </AuthContextProvider>
  //</React.StrictMode>
);
