import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://avatars.mds.yandex.net/get-pdb/1616115/f5b0f9b6-5e86-458b-a733-f9ba768fd3b8/s1200' />
      {props.message}
      <div>
  <span>like {props.likes}</span>
      </div>
    </div>
  )
}

export default Post;