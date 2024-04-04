import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer"

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initailstate={
    isLoading:false,
    isError:false,
    product:[],
    featureProducts:[],
    isSingleloading: false,
    soloProduct:{},
}

const AppProvider = ({ children }) => {

    const [state,dispatch]=useReducer(reducer,initailstate)

    const getProduct = async (url) => {
        dispatch({type: "SET_LOADING"})
        try {
            const res = await axios.get(url);
            const product = await res.data
            // console.log(product)
            dispatch({type:"MY_API_PRODUCT",payload: product});
        } catch (error) {
            dispatch({type: "API_ERROR"})
        }
    };


    const getSingleProduct= async (url)=>{
        dispatch({type: "SINGLE_LOADING"})
        try{
        const res =await axios.get(url);
        const soloProduct=await res.data;
        dispatch({type:"MY_SINGLE_PRODUCT",payload:soloProduct});
        }catch(err){
            dispatch({type: "SINGLE_ERROR"})
           
        }
    }


    useEffect(() => {
        // getSingleProduct(API);
        getProduct(API);
    }, [])
    return (<AppContext.Provider value={{ ...state , getSingleProduct }}>{children}</AppContext.Provider>);
}

const useProductContext=()=>{
    return useContext(AppContext);
}

export { AppProvider, AppContext,useProductContext }