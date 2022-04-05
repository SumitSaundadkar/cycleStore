import './sidebar.css';
import { useFilterContext } from '../../Contexts/filter-context';
const FilterSideBar=() =>{
  const {productListState,productListDispatch}=useFilterContext()
    return (
       <div> 
        <div id="filter-sidebar">
          <div className="filter-sidebar-heading">
            <span>
              <b>Filter</b>
            </span>
            <span>
              <button className="btn btn-icon-heart" onClick={() => productListDispatch({ type: "" })}>Clear</button>
            </span>
          </div>
         
  
          <div className="filter-category">
            <span>
              <b>Category</b>
            </span>
            <div className="filter-item">
              <input  type="checkbox"
              checked={productListState.categoryName.includes("Kid")}
            onChange={() =>
              productListDispatch({ type: "CATEGORY", payload: "Kid" })
            } />
              Kid Cycle
            </div>
            <div className="filter-item">
              <input type="checkbox"
              checked={productListState.categoryName.includes("Girl")}
            onChange={() =>
              productListDispatch({ type: "CATEGORY", payload: "Girl" })
            } />
              Girl Cycle
            </div>
            <div className="filter-item">
              <input type="checkbox"  checked={productListState.categoryName.includes("Adventure")}
              onChange={() =>
                productListDispatch({ type: "CATEGORY", payload: "Adventure" })
              } />
              Adventure Cycle
            </div>
          </div>
          <div className="filter-category">
            <span>
              <b>Rating</b>
            </span>
            <div className="filter-item">
              <input type="checkbox"  checked={productListState.rating ==="5"} onChange={()=>productListDispatch({type:"RATING",payload:"5"})}  />5 Star
            </div>
            <div className="filter-item">
              <input type="checkbox"  checked={productListState.rating ==="4"} onChange={()=>productListDispatch({type:"RATING",payload:"4"})}  />4 Star
            </div>
            <div className="filter-item">
              <input type="checkbox" checked={productListState.rating ==="3"} onChange={()=>productListDispatch({type:"RATING",payload:"3"})}   />3 Star
            </div>
            <div className="filter-item">
              <input type="checkbox" checked={productListState.rating ==="2"} onChange={()=>productListDispatch({type:"RATING",payload:"2"})}  />2 star
            </div>
          </div>
          <div className="filter-category">
            <span>
              <b>Sort by</b>
            </span>
            <div className="filter-item">
              <input value="" type="checkbox" name='sort'
              onChange={() =>
                productListDispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
              }  
           
               />
              Price-Low to high
            </div>
            <div className="filter-item">
              <input type="checkbox" onChange={() =>
                productListDispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
              } />
              Price-High to low
            </div>
          </div>
        </div>
        </div>
      
    );
  }
  
  export { FilterSideBar };
  