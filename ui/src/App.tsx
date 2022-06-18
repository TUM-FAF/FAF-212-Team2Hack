import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from './pages/feed';
import Profile from './pages/profile';
import Chat from './pages/chat';

const App: React.FC = () => {
	return (
		<div className="grid grid-cols-12 min-h-screen text-center">
			<div className="col-span-2">
				<Profile/>
			</div>
			<div className="col-span-7 border-l-2 border-r-2 border-gray-200 text-center">
				<Routes>
					<Route path="/" element={ <Feed/> }/>
					<Route path="/profile" element={ <Profile/> }/>
					<Route path="/chat" element={ <Chat/> }/>
				</Routes>
			</div>
			<div className="col-span-3 text-center">
				<Chat/>
			</div>
		</div>
	);
};

export default App;
