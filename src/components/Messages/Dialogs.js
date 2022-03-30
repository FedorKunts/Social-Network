import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Jack" },
    { id: 4, name: "Ammy" },
    { id: 5, name: "Ron" },
    { id: 6, name: "Harry" }
  ];
  let dialogsElements = dialogs.map( d => {<DialogItem id={d.id} name={d.name} />});

  let messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Hello" },
    { id: 4, message: "Hello" },
    { id: 5, message: "Hello" },
    { id: 6, message: "Hello" }
  ];
  let messagesElemets = messages.map( m => {<Message message={m.message} />});



  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElemets}</div>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>};

const DialogItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Dialogs;