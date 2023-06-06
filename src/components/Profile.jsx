import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New posts
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          post 1
        </div>
        <div className='item'>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;