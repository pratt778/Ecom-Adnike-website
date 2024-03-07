import { useState } from "react"
import Nav from "./Navigation/nav"
import Recommend from "./Recommended/recommend"
import Card from "./components/card.jsx"
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


//filtering the products
 const filteredproducts = data.filter((item)=>(item.title.toLowerCase().indexOf(searchquery)!==-1))

 //radio filtering
 const handleradiochange = event =>{
  setCategoryType(event.target.value)
 }

 //button filtering

 const handlebuttonchange = event=>{
  setCategoryType(event.target.value)
 }

 function filterdata (products,selected,query){
  let filteredata = products

  if(query){
    filteredata= filteredproducts
  }

  if(selected){
    filteredata= filteredata.filter(({category,color,company,newPrice,title})=>(
      category===selected|| color===selected||company===selected|| newPrice===selected||title===selected))
  }
  return filteredata.map(({img,title,star,reviews,prevPrice,newPrice})=>{
    return <Card
            key={Math.random()*1000}
            img={img}
            title= {title}
            star={star}
            reviews = {reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
            />
  })
}
const finalitems = filterdata(data,categoryType,searchquery)
  


  return <>
  <Nav handleInputTextChange={handleInputTextChange} query={searchquery}/>
  <Recommend handlebuttonchange={handlebuttonchange}/>
  <Product result={finalitems}/>
  <Sidebar handleradiochange={handleradiochange}/>
  </>
}