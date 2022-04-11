import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));
  let messagesElemets = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElemets}
        <textarea></textarea>
        <button>send</button>
      </div>
    </div>
  );
};

export default Dialogs;
