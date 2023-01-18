import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [{id: 1, name: 'Steve'}, {id: 2, name: 'Linus'}, {id: 3, name: 'Tim'}, {id: 4, name: 'Johny'}]

let messagesData = [{id: 1, text: 'Hi!'}, {id: 2, text: 'How are u?'}, {id: 3, text: 'Yo'}]

let postsData = [{id: 1, message: 'hello, how are u?', likes_num: 15}, {id: 2, message: 'lolkek', likes_num: 8}]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
	<App ddata={dialogsData} mdata={messagesData} pdata={postsData}/>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
