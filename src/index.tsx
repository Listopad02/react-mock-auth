import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

const rootNode = document.getElementById('root')!
const app = <Provider store={store}>
              <React.StrictMode>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </React.StrictMode>
            </Provider>

ReactDOM.createRoot(rootNode).render(app);

reportWebVitals();