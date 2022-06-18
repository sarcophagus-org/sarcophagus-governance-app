import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataProvider } from './context/blockchain'
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import { Web3Provider } from './context/web3Data/Web3Provider';

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider>
      <DataProvider>
        <ToastContainer
          closeButton={true}
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          closeOnClick 
          pauseOnFocusLoss
          draggable
          />
        <App />
      </DataProvider>
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
