import { useState } from "react"
import Nav from "./Navigation/nav"
import Recommend from "./Recommended/recommend"
import Product from "./product/product"
import Sidebar from "./sidebar/sidebar"
import data from "./data/data_prod.jsx"

export default function App() {

  const [categoryType,setCategoryType]= useState(null)

  //Input search filter
  const [searchquery,setSearchQuery]=useState('')

  const handleInputTextChange = event=>{
    setSearchQuery(event.target.value)
  }


 const filteredproducts = data.filter((item)=>(item.title.toLowerCase().indexOf(searchquery)!==-1))


  return <>
  <Nav/>
  <Recommend/>
  <Product/>
  <Sidebar/>
  </>
}