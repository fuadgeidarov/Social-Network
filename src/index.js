import './index.css';
import store from "./Redux/ReduxStore";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
            <App />
        </Provider>
        </React.StrictMode>
        </BrowserRouter>
    );





