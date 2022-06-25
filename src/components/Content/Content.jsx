import React from "react";
import s from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile=()=>{
    return<div >
        <div>
            <img src='https://pbs.twimg.com/media/EFIiRRyXYAA_xGw?format=jpg&name=900x900'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>

    </div>

}
export default Profile;