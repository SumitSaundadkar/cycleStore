import './sidebar.css';


const FilterSideBar=() =>{
    return (
       <div> 
        <div id="filter-sidebar">
          <div className="filter-sidebar-heading">
            <span>
              <b>Filter</b>
            </span>
            <span>
              <b>Clear</b>
            </span>
          </div>
          <div className="filter-sidebar-price">
            <span>
              <b>Price</b>
            </span>
          </div>
          <div className="filter-sidebar-range">
            <span>9000</span>
            <span>13000</span>
            <span>16000</span>
          </div>
          <input
            className="price-range"
            type="range"
            min="9000"
            max="16000"
            value="9000"
          />
  
          <div className="filter-category">
            <span>
              <b>Category</b>
            </span>
            <div className="filter-item">
              <input  type="checkbox" />
              Kid Cycle
            </div>
            <div className="filter-item">
              <input type="checkbox" />
              Girl Cycle
            </div>
            <div className="filter-item">
              <input type="checkbox" />
              Adventure Cycle
            </div>
          </div>
          <div className="filter-category">
            <span>
              <b>Rating</b>
            </span>
            <div className="filter-item">
              <input type="checkbox" />4 Star
            </div>
            <div className="filter-item">
              <input type="checkbox" />3 Star
            </div>
            <div className="filter-item">
              <input type="checkbox" />2 star
            </div>
          </div>
          <div className="filter-category">
            <span>
              <b>Sort by</b>
            </span>
            <div className="filter-item">
              <input value="" type="checkbox" />
              Price-Low to high
            </div>
            <div className="filter-item">
              <input type="checkbox" />
              Price-High to low
            </div>
          </div>
        </div>
        </div>
      
    );
  }
  
  export { FilterSideBar };
  