import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Messages.module.css";

const DialogsItem = (props) => {
  let path = "/messages" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessagesItem = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

let Messages = (props) => {

let dialogsData = [
  {id: 1, name: 'Tom'},
  {id: 2, name: 'Mary'},
  {id: 3, name: 'Jack'},
  {id: 4, name: 'Ammy'},
  {id: 5, name: 'Ron'},
  {id: 6, name: 'Harry'}
]

let messagesData = [
  {message: 'Hello'},
  {message: 'Hello'},
  {message: 'Hello'},
  {message: 'Hello'},
  {message: 'Hello'},
  {message: 'Hello'}
]

  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        <DialogsItem id={dialogsData[0].id} name={dialogsData[0].name} />
        <DialogsItem id={dialogsData[1].id} name={dialogsData[1].name} />
        <DialogsItem id={dialogsData[2].id} name={dialogsData[2].name} />
        <DialogsItem id={dialogsData[3].id} name={dialogsData[3].name} />
        <DialogsItem id={dialogsData[4].id} name={dialogsData[4].name} />
        <DialogsItem id={dialogsData[5].id} name={dialogsData[5].name} />
      </div>
      <div className={s.messages}>
        <MessagesItem message={messagesData[0].message} />
        <MessagesItem message={messagesData[1].message} />
        <MessagesItem message={messagesData[2].message} />
        <MessagesItem message={messagesData[3].message} />
        <MessagesItem message={messagesData[4].message} />
        <MessagesItem message={messagesData[5].message} />
      </div>
    </div>
  );
};

export default Messages;
