import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <img className={s.picture} src='https://xceed.me/blog/wp-content/uploads/2018/01/Barcelona-best-clubs-2019-at-xceed.png' />
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo;