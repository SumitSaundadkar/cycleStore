import { useReducer,useContext } from "react";
import { createContext } from "react";

const FilterContext=createContext();

const productListReducerFun=(productListState,action)=>{
    switch(action.type){
        case "SORT_BY":
            return {...productListState,sortBy:action.payload};
            case "RATING":
                return {
                   ...productListState,rating:action.payload
                  };
            case "CATEGORY":
                return {
                  ...productListState,
                  categoryName: productListState.categoryName.includes(action.payload)
                    ? productListState.categoryName.filter(
                        (value) => value !== action.payload
                      )
                    : [...productListState.categoryName, action.payload],
                };  
        default :
        return{sortBy:null,categoryName: [],rating:null,}    
    }

}

const FilterContextProvider=({children})=>{
    const [productListState,productListDispatch]=useReducer(productListReducerFun,{
        sortBy:null,categoryName: [],rating:null,

    })
    return(
        <FilterContext.Provider value={{productListState,productListDispatch}}>
        {children}
        </FilterContext.Provider>
        

    )
}
const useFilterContext = () => useContext(FilterContext);
export {FilterContextProvider,useFilterContext}