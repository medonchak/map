import React from 'react';
import { connect } from "react-redux"

import Main from './main'
import {GoogleApiWrapper} from 'google-maps-react';
import {SaveMarker} from '../../redux/reducer/markerReducer'

class MainContainer extends React.Component { 
    state ={
        lat:'',
        lng:''
    }
    componentDidMount(){
        const success=(pos)=> {
            var crd = pos.coords;
            this.setState({lat:crd.latitude});
            this.setState({lng:crd.longitude});
          };
          
          function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          };
          navigator.geolocation.getCurrentPosition(success, error);
    }
    render() {
      return (
          <Main  {...this.props} state={this.state}/>
      );
    }
  }
  const MapMain=GoogleApiWrapper({
    apiKey: ("AIzaSyAOkLBGP6CKS5ac2P2ect_cabZDQjRZf7Q")
  })(MainContainer)
 
  const mapStateToProps =(state)=>{
    return{
        Bike_Shelters:state.Bike_Shelters,
        Restaurants:state.Restaurants,
        marker:state.Marker
    }
}

  export default connect(mapStateToProps,{SaveMarker})(MapMain)