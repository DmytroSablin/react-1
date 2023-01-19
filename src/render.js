import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (allprops) => {
	root.render(<BrowserRouter>
		<React.StrictMode>
			<App state={allprops.state}
				 addpost={allprops.addPost}
				 changepost={allprops.onChangePost}
				 changemessage={allprops.onChangeMessage}
				 addmessage={allprops.addMessage}
				 Like={allprops.Like}
			/>
		</React.StrictMode>
	</BrowserRouter>);
}