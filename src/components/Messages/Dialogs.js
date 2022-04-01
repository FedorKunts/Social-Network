import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  
  let dialogsElements = props.state.dialogsPage.dialogs.map((d) => <DialogItem id={d.id} name={d.name} />);
  let messagesElemets = props.state.dialogsPage.messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElemets}</div>
    </div>
  );
};


export default Dialogs;
