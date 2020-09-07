
let _state ={
    marker:[]
}
const MarkerReducer =(state=_state,action)=>{
  
    switch (action.type) {
        
            case "Marker":
                let CopyState ={...state}
                CopyState.marker=[...state.marker]
                CopyState.marker=action.marker
                return CopyState
            default:
                return state
   }
   
}
   
export const SaveMarker =(data)=>({type:'Marker',marker:data})

export default MarkerReducer