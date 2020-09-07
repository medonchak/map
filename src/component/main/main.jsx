import React, { useState,useEffect} from 'react';
import s from './main.module.css'
import {Map,Marker} from 'google-maps-react';

const Main =(props)=> { 

    let [mylat,redlat]=useState([{lat:'',lng:''}])
    let [pos,redacPos]=useState({lat:'',lng:''})
    let [zoom,redzoom]=useState(14)
    let [rest,redrest]=useState(false)
    let [doc,reddoc]=useState(false)
    let [azs,redazs]=useState(false)
    let [shcool,redshcool]=useState(false)
    let [obj,redshowobj]=useState(false)

    useEffect(()=>{
      let lat=props.state.lat
      let lng=props.state.lng
      redacPos({lat,lng})
    },[props.state.lat,props.state.lng])

    ///масив маркерів
    let redlatt=(r)=>{
        redlat(r)
    }

    ///створити маркер по натиску по карті
    let handleMapClick = (ref, map, ev) => {
        let location=ev.latLng;
        const lat = ev.latLng.lat();
        const lng = ev.latLng.lng();
        let mas=[...mylat]
        mas.push({lat,lng})
        redlatt(mas)
        map.panTo(location);
        
      };

    ///моя геолокація
    let Geolocation =()=>{
      let lat=props.state.lat
      let lng=props.state.lng
      redacPos({lat,lng})
    }

    ////позиція об'єкта який вибраний
    let createMerkerObj=(latlng)=>{
      redzoom(25)
      redacPos(latlng)
    }

    /////керування списком обєктів
    let activ=(e)=>{
      
      switch (e.target.value) {
        case 'Ресторани':
          redrest(true)
          reddoc(false)
          redazs(false)
          redshcool(false)
          let test = props.Restaurants.restaurants.map(c =>  c.latlng)
          redlatt(test)
          break;
        case 'Аптеки':
          reddoc(true)
          redrest(false)
          redazs(false)
          redshcool(false)
          break;
        case 'АЗС':
          redazs(true)
          redrest(false)
          reddoc(false)
          redshcool(false)
          break;
        case 'Школи':
          redshcool(true)
          redrest(false)
          reddoc(false)
          redazs(false)
        
          break;
        default:
          break;
      }
    }
    let selectRest=(e)=>{
      props.Restaurants.restaurants.forEach(element => {
        if(e.target.value===element.name)
        createMerkerObj(element.latlng)
      });
    }
    let saveMarker=()=>{
    props.SaveMarker(mylat)
    }
    let showMarker=()=>{
      redlat(props.marker.marker)
    }
    let showObj=()=>{
      if(obj)
      redshowobj(false)
      else
      redshowobj(true)
    }
      return (
        <div>   
        <Map style={{width: "100%",height: "80%",}} google={props.google} onClick={handleMapClick} zoom={zoom}  center={{lat:pos.lat,lng:pos.lng}} >
        {mylat.map(c => <Marker  name={'Current location'} position={{ lat: c.lat, lng: c.lng }} />)}
        <Marker  name={'Current location'} position={{lat:props.state.lat,lng:props.state.lng}} />
        </Map>
        <div className={s.menu} >
        <div><input type="button" className={s.but} value="Save Marker" onClick={saveMarker}/><br/>
        <input type="button" className={s.but} value="show Marker" onClick={showMarker}/><br/>
        <input type="button" className={s.but} value="show Obj" onClick={showObj}/></div>
       
           {obj && <div>
              <div><input type="button" className={s.but} onClick={activ} value={"Ресторани"}/></div> 
              <div><input type="button" className={s.but} onClick={activ} value={"Аптеки"}/></div>
              <div><input type="button" className={s.but} onClick={activ} value={"АЗС"}/></div>
              <div><input type="button" className={s.but} onClick={activ} value={"Школи"}/></div>
              <div><input type="button" className={s.but} onClick={Geolocation} value={"Где я"}/></div>
           </div>  }        
          {shcool && obj &&<dl>
            <select className={s.select} >
              <option value="Center">№117</option>
          </select>
          </dl>}
          {azs && obj &&<dl>
            <select className={s.select} >
              <option value="Center">GLUSCO</option>
          </select>
          </dl>}
          {rest && obj && <select className={s.select} onChange={selectRest}>
            {props.Restaurants.restaurants.map(c => <option value={c.name}>{c.name}</option>)}
          </select>}
          {doc && obj &&<dl>
            <select className={s.select} >
              <option value="Center">Center</option>
          </select>
          </dl>} 
        </div>
        </div>
     
      );
    }
  
  export default Main