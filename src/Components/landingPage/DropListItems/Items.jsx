import NameCategory from "./NameCategory";
import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";


export default function Items() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/NameCtegory")
      .then((response) => {
        setData(response.data);
        if (response.data.length > 0) {
          const firstCategory = response.data[0];
          setSelectedCategory(firstCategory.id);
          // Fetch items for the first category
          axios.get(`http://localhost:3000/items?categoryId=${firstCategory.id}`)
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching items:', error));
        }
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    // Fetch items for selected category
    axios.get(`http://localhost:3000/items?categoryId=${categoryId}`)
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }

  // console.log(data);
  return (
    <div className="w-full min-h-screen   animate-fade-in-down">
  <div className="px-10 grid grid-cols-3 h-[280px] w-full bg-white absolute z-50">
<div className="">
<NameCategory data={data} handleCategoryClick={handleCategoryClick}/>
</div>
<div className="">
<NameCategory data={data} handleCategoryClick={handleCategoryClick}/>
</div>
<div>
  <Product selectedCategory={selectedCategory} items={items} />
</div>
  </div>
  </div>
  )
}
