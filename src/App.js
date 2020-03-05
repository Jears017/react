import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';


const App = (props) => {
debugger;
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} dispatch={props.dispatch} newMessageText={props.state.messagesPage.newMessageText}/>} />
        <Route path='/profile' render={() => <Profile store={props.store} profilePage={props.state.profilePage}  />} />
        <Route path='/music' render={() => <Music />} />
      </div>

    </div>
  );
}


export default App;
