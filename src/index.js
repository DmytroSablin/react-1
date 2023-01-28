import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
	root.render(<BrowserRouter>
		<React.StrictMode>
			<App state={store.getState()}
				 addpost={store.addPost.bind(store)}
				 changepost={store.onChangePost.bind(store)}
				 changemessage={store.onChangeMessage.bind(store)}
				 addmessage={store.addMessage.bind(store)}
				 Like={store.Like.bind(store)}
			/>
		</React.StrictMode>
	</BrowserRouter>);
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)

reportWebVitals();