import React from 'react'
import {reduxForm,Field } from 'redux-form'
import {Redirect} from 'react-router-dom'


const Form =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}  action="">
        <label htmlFor="">Доброго дня введідь будь ласка:</label>
      <br/>
        <label htmlFor=""> Логін    </label> 
         <Field name={"login"} component={"input"} type="text"/><br/>
        <label htmlFor=""> Пароль  </label>
        <Field name={"password"} component={"input"} type="password"/><br/>
        <button>Увійти</button>
    </form>
    )
}

const ReduxFromLogin=reduxForm({
    form:"login"
})(Form);

const Login =(props)=>{
    let onSubmit=(data)=>{
        props.auth.users.forEach(element => {
            if(element.login===data.login && element.password===data.password)
            {
                let user={
                    isAuth:true,
                    user:data.login
                }
                props.setAuth(user)
            }
        });
    }
    if(props.auth.isAuth) return <Redirect to="/main"/>
    return <div>
        <ReduxFromLogin onSubmit={onSubmit} {...props}/>
    </div>
}




export default Login