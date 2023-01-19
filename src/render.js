import React from 'react';
import './index.css';
import App from './App';
import root from "./index";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state, addPost) => {
	root.render(<BrowserRouter>
		<React.StrictMode>
			<App state={state} addpost={addPost}/>
		</React.StrictMode>
	</BrowserRouter>);
}