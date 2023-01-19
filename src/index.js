import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import App from "./App";
import state, {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
	<React.StrictMode>
		<App state={state} addpost={addPost}/>
	</React.StrictMode>
</BrowserRouter>);

export default root

reportWebVitals();