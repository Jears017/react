import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreater, helpMe } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let sendMessage = () => {
        // let message = newMessageElement.current.value;
        //alert(message)
        props.store.dispatch(addMessageActionCreater())
    }
 

    let onDialogChange = (message) => {
        let action = helpMe(message);
        props.store.dispatch(action)
    }

    return (
        <Dialogs updateNewMessage={onDialogChange} sendMessage={sendMessage} state={state} />
    )
}

export default DialogsContainer;