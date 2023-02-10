import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
	root.render(<BrowserRouter>
		<React.StrictMode>
			<App state={store.getState()}
				 dispatch={store.dispatch.bind(store)}
			/>
		</React.StrictMode>
	</BrowserRouter>);
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)

reportWebVitals();