import {Link } from   "react-router-dom";
import './category-item.style.scss'

const CategoryItem =({category}) =>{
    const {imageUrl,title} = category;
    return(
    <div className="category-container">
    {/* <image/> */}
    <div className="background-image" style={{
      backgroundImage: `url(${imageUrl})`
    }}/>

    
      <div className="category-body-container">
        <Link to={title} >
         <h2>{title.toUpperCase()}</h2>
         <p>Shop now</p>
        </Link>
      </div>
   

    </div>
    )


}


export default CategoryItem;