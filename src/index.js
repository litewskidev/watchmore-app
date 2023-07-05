import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './context/AuthContext.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from './utils/ScrollToTop.js';
import store from './redux/store.js';
import './styles/global.scss';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.jsx';
export { default as Home } from "../src/components/Home/Home.jsx";
const App = React.lazy(() => import('./App.js'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
      <Suspense fallback={ <div><LoadingSpinner /></div> }>
        <Provider store={store} stabilityCheck="none">
          <ScrollToTop />
          <App />
        </Provider>
        </Suspense>
      </BrowserRouter>
    </AuthContextProvider>
  //</React.StrictMode>
);
