import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/sasha/' + props.id
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}> {props.name}</NavLink>
        </div>
    )
}
const Message=(props)=>{
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem name='Sasha' id='1'/>
                <DialogItem name='Danya' id='2'/>
                <DialogItem name='Sergei' id='3'/>
                <DialogItem name='Peta' id='4'/>
                <DialogItem name='Sveta' id='5'/>
                <DialogItem name='Nastya' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are ?'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs;