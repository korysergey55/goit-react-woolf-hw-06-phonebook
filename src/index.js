import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { App } from 'components/App/App';
import { Provider } from 'react-redux'
import { persistor, store } from 'redax/store/store';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={6000}
        />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
