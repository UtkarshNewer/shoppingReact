const initialState={}
const ReviewsReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_REVIEWS_STARTED":{
            return {...state,isLoading:true}
        }
        case "FETCH_REVIEWS_SUCCESS":{
            return {...state,isLoading:false,reviews:action.info}
        }
        case "FETCH_REVIEWS_FAILED":{
            return {...state,isLoading:false,errorMessage:action.error}
        }
        default :
            return state;
    }
}
export default ReviewsReducer;