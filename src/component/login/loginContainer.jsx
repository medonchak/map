import { connect } from "react-redux"
import Login from './login'
import {setAuth} from '../../redux/reducer/authReducer'
const mapStateToProps =(state)=>{
    return{
        auth:state.auth,
    }
}
export default connect(mapStateToProps,{setAuth})(Login)