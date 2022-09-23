import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Provider store={store}><App /></Provider>);