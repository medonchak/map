let _state ={
    user:"",
    isAuth:false,
    users:[
        {
            login:"admin",
            password:"1111"
        }
    ]
}
const AuthReducer =(state=_state,action)=>{
  
    switch (action.type) {
        case "setAuth":{
            let copyState={...state}
            copyState.user=action.users
            copyState.isAuth=action.isAuth
            return copyState
        }   
        case "setOut":{
            let copyState={...state}
            copyState.user={}
            copyState.isAuth=false
            return copyState
        } 
            default:
                return state
   }
}
    export const setAuth=(data)=>({
        type:"setAuth",  
        users:data.user,
        isAuth:data.isAuth})
    export const setOut=()=>({type:"setOut"})



export default AuthReducer;