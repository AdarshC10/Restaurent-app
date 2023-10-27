import { SUCCESS,FAIL } from "../Constants/AllrestConstants.";


export const allrestReducers =(state={allrestaurents:[]},action)=>{
    //its to be success or may be fail best is switch
    switch(action.type){
        case SUCCESS:
            return{
                allrestaurents:action.payload //data come from action
            }
        case FAIL:
            return{
                allrestaurents:[]

            }
        default:
            return state
    }
}