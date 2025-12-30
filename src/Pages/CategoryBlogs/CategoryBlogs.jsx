import React from 'react'
import Banner from '../../Components/Banner/Banner'
import TrendingBlog from '../../Components/TrendingBlog/TrendingBlog'
import blogs from '../../Utils/MockData'
import "./CategoryBlogs.css"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CategoryBlogs = () => {
    const [currentCategory, setCurrentCategory] = useState('Programming')
    const { category } = useParams();
    useEffect(()=>{
      if(category){
        setCurrentCategory(category)
      }
    }, [])

  return (
    <>
      <Banner />

      <div className="trending-blogs-section">
        <h1>
          {currentCategory}
        </h1>

        <div className="all-tending-blogs d-flex flex-wrap justify-content-between row-gap-2">
          {
            blogs.map(blog => blog.category ===currentCategory &&(
              <TrendingBlog key={blog.id} blog={blog}/>
            ))
          }
        </div>


        <br /><br /><br />
      </div>
    </>
  )
}

export default CategoryBlogs