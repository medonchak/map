import {combineReducers,createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'
import RestaurantsReducer from './reducer/restaurantsReducer'
import Bike_SheltersReducer from './reducer/bikeSheltersReducer'
import MarkerReducer from './reducer/markerReducer'
import AuthReducer from './reducer/authReducer'

let reducer = combineReducers({
    Bike_Shelters:Bike_SheltersReducer,
    Restaurants:RestaurantsReducer,
    Marker:MarkerReducer,
    auth: AuthReducer,
    form:formReducer,
})

let store = createStore(reducer);
window.store=store
export default store