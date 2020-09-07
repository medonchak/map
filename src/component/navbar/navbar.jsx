import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './navbar.module.css'

const NavBar=(props)=>{
    return <div className={s.nav}>
        <div className={s.block}>
            logo
        </div>
        <div className={s.block}>
            <NavLink className={s.items} to={"/main"}>Головна</NavLink>
            <NavLink className={s.items} to={"/avtor"}>Об авторе</NavLink>
            {props.auth.isAuth ? <span className={s.items}>{props.auth.user}</span> : <NavLink className={s.items} to={"/login"}>Увійти</NavLink>}
        </div>
       
    </div>
}
export default NavBar;