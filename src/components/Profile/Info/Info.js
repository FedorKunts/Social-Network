import React from "react";
import s from './Info.module.css';

import me from '../../../assets/images/me.JPG';

let Info = () => {
  return (
    <div className={s.info}>
      <img src = {me} alt=''/>
      <div className={s.infoText}>
        <h1>Fedor Kunz</h1>
        <p>Я люблю программировать, заниматься спортом, путешествовать</p>
      </div>
    </div>
  );
};

export default Info;

