import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/state";


const Dialogs = (props) => {
     let dialogsElements = props.dialogPage.dialogs
         .map( d => <DialogItem name={d.name} id={d.id} />)

     let messagesElement = props.dialogPage.message
         .map( m => <Message message={m.message} />)


    let newMessageElement = React.createRef()
    let addMessage = () => {
        // debugger;
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action)
    }

     return (
         <div className={s.dialogs}>
             <div className={s.dialogsItems}>
                 { dialogsElements }
             </div>
             <div className={s.messages}>
                 { messagesElement }
                 <textarea onChange={onMessageChange} ref={newMessageElement}
                           value={props.dialogPage.newMessageText}/>
                 <button onClick={addMessage}>Add message</button>
             </div>
         </div>
     )
}

export default Dialogs;