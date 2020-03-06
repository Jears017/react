import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreater, helpMe } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = props.state.messages.map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        // let message = newMessageElement.current.value;
        //alert(message)
        props.sendMessage();
    }

   

   
    

    let onDialogChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessage(message);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_item}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
            <div className={s.messageInput}>
                <textarea onChange={onDialogChange} ref={newMessageElement} value={props.state.newMessageText}></textarea>
                <div>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;