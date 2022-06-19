import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Feed from './pages/feed';
import Profile from './pages/profile';
import Chat from './pages/chat';
import {useAppDispatch, useAppSelector} from './app/hooks';
import Login from "./pages/Login";
// import { fetchMessages } from './features/messages/messagesSlice';

const App: React.FC = () => {
    const messagesStatus = useAppSelector<'rejected' | 'idle' | 'pending' | 'fulfilled'>(state => state.messageState.status);
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.userState.user);
    // useEffect(() => {
    // 	if (messagesStatus === 'idle')
    // 		dispatch(fetchMessages());
    // }, [dispatch, messagesStatus]);

    return (
        <div className="grid grid-cols-12 min-h-screen max-h-screen text-center">
            {
                user ?
                    <>
                        <div className="col-span-2">
                            <Profile/>
                        </div>
                        <div className="col-span-7 border-l-2 border-r-2 border-gray-200 text-center">
                            <Routes>
                                <Route path="/" element={<Feed/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="/chat" element={<Chat/>}/>
                            </Routes>
                        </div>
                        <div className="col-span-3 text-center">
                            <Chat/>
                        </div>
                    </> :
                    <Login/>
            }
        </div>
    );
};

export default App;
