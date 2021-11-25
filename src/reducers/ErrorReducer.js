const initialstate={error:false}

const ErrorReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "ERROR_MODAL":{
            return {...state,error:true}
        }
        case "ERROR_MODAL_CLOSE":{
            return {...state,error:false}
        }
        default:
            return state
    }
}
export default ErrorReducer;