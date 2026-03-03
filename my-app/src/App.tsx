import { useState, useMemo, useEffect, SetStateAction } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LunchQueue from './lunchQueue'
import axios from 'axios'


  interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
  }

function App() {

const [products, setProducts] = useState<Product[]>([]);
const [filter, setFilter] = useState<string>("All");

useEffect(() => {
  axios
  .get("https://dummyjson.com/products")
  .then((res: { data: { products: SetStateAction<Product[]>; }; }) => setProducts(res.data.products))
  .catch((err: any) => console.log(err))

},[]);

const filterProducts = products
      .filter((p) => filter === "All" || p.category === filter)
      .sort((a,b) => b.price - a.price );
      
const truncate = (text: string ) => 
  text.length> 25 ? text.slice(0,25) + "..." : text;
  
  
  return (
    <div style={{padding: "20px"}}>
      <h1>Products</h1>   

      <label>Filter By Category: </label>
      <select onChange={(e) => setFilter(e.target.value)}>   
        <option value="All">All</option>
        <option value="beauty">Beauty</option>
      </select>
      <table border={1} cellPadding={10} cellSpacing={0} style={{marginTop: "20px"}}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filterProducts.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
              <td>{truncate(p.description)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )

    
    
}


export default App
