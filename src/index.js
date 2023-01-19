import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import App from "./App";
import {allProps} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
	<React.StrictMode>
		<App state={allProps.state}
			 changepost={allProps.onChangePost}
			 addpost={allProps.addPost}
			 changemessage={allProps.onChangeMessage}
			 addmessage={allProps.addMessage}
			 Like={allProps.Like}
		/>
	</React.StrictMode>
</BrowserRouter>);

reportWebVitals();