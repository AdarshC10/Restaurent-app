import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { FAIL, SUCCESS } from "../../Constants/AllrestConstants.";


// logic for updating state

// using function with export beacause we need to use anywhere
export const RestaurentlistAction=()=>async(dispatch)=>{

    try{

         //API call
         //data destructure {data}
    const {data} =await axios.get('http://localhost:3001/restaurants')
    console.log(data);
    //data need to come in dispatch
    dispatch({
        // data pass in payload
        payload:data, //data
        type:SUCCESS
    })
    }
    catch(error){
        dispatch({
            payload:error, //error
            type:FAIL
        })
      
    }
   
    //in action data go through dispatch use in async(dispatch)
    //then we need to call the function goto AllRest.js - import RestaurentlistAction then
    //remove fetchData()
}
