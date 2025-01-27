import React from 'react';
import './global.styles.css';
import App from './views/main/main.component';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();