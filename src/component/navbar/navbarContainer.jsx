import { connect } from "react-redux"
import {setOut} from '../../redux/reducer/authReducer'
import NavBar from "./navbar"
const mapStateToProps =(state)=>{
    return{
        auth:state.auth,
    }
}
export default connect(mapStateToProps,{setOut})(NavBar)