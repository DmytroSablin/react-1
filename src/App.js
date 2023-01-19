import { Route, Routes} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import React from "react";

function App(props) {
	return (<div className='app-wrapper'>
				<Header/>
				<Navbar state={props.state.navBar}/>
				<div className="app-wrapper-content">
					<Routes>
						<Route path='/profile' element={<Profile
							state={props.state.profilePage} addpost={props.addpost}/>}/>
						<Route path='/dialogs' element={<Dialogs
							state={props.state.messagesPage}/>}/>
						<Route path='/news' element={<News/>}/>
						<Route path='/music' element={<Music/>}/>
					</Routes>
				</div>
		</div>);
}

export default App;
