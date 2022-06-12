import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPost=()=>{
    return<div>
        My post
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>


}
export default MyPost;