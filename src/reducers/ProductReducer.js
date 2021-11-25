const initialState={}
const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_PRODUCTS_STARTED":{
            return {...state,isLoading:true}
        }
        case "FETCH_PRODUCTS_SUCCESS":{
            return {...state,isLoading:false,productsInfo:action.info}
        }
        case "FETCH_PRODUCTS_FAILED":{
            return {...state,isLoading:false,errorMessage:action.error}
        }
        default :
            return state;
    }
}
export default ProductReducer;