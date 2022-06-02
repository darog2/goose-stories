import React from "react";
import s from './Content.module.css';

const Profile=()=>{
    return<div className={s.content}>
        <div>
            <img src='https://pbs.twimg.com/media/EFIiRRyXYAA_xGw?format=jpg&name=900x900'/>
        </div>
        <div>
            ava + description
        </div>
        My post
        <div>
            <div>
                New post
            </div>
            <div className='post'>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>

        </div>
    </div>

}
export default Profile;