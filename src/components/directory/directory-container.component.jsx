import path from 'path';

// Assuming CategoryItem is in a different directory
const categoryItemPath = path.join(__dirname, '../../components/category-item/category-item.component');
import CategoryItem from categoryItemPath;

const Directory=({categories})=>{

    return (
        <div className="directory-container">
    
          {categories.map((category) =>
          (<CategoryItem key={category.id}  category={category}/>)
      )}
        </div>
      );
} 

export default Directory;