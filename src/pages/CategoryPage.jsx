import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Product from "../components/Product"
import TopProducts from '../components/TopProducts'

const CategoryPage = () => {
  return (
    <div>
     <Announce/>
     <Navbar/>
     <div className="felx flex-col p-5">
        <h1 className="text-[30px] text-center">Men's Cloth</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex mobile:flex-col">
            <p>Filter by</p>

            <select className="ml-3 border-2 border-silver mobile:mt-3">
              <option selected disabled>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <select className="ml-3 border-2 border-silver mobile:mt-3">
              <option selected disabled>
                Color
              </option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Red</option>
            </select>
          </div>

          <div>
            <p className="flex mobile:flex-col mobile:items-end mobile:mt-[-35px]">Sort by</p>
            <select className="ml-3 border-2 border-silver">
              <option>Newest (first)</option>
              <option>Oldest (first)</option>
              <option>Price (Asc)</option>
              <option>Price (Desc)</option>
            </select>
          </div>
        </div>
      </div>
     <TopProducts/>
     <Newsletter/>
     <Footer/>
    </div>
  )
}

export default CategoryPage
