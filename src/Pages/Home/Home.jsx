import React from 'react'
import Banner from '../../Components/Banner/Banner'
import TrendingBlog from '../../Components/TrendingBlog/TrendingBlog'
import blogs from '../../Utils/MockData'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Banner />
      <div className='my-2'>
        <h1>Read blogs from</h1>
        <div className='d-flex justify-content-between'>
          <Link to={'/Blogs/Programming'}>
            <div className="card" style={{width:"18rem"}}>
              <img src="/media/programming.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Programming</h5>
                </div>
            </div>
          </Link>
          <Link to={'/Blogs/Cooking'}>
            <div className="card" style={{width:"18rem"}}>
              <img src="/media/cooking.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Cooking</h5>
                </div>
            </div>
          </Link>
          <Link to={'/Blogs/Workouts'}>
            <div className="card" style={{width:"18rem"}}>
              <img src="/media/Fitness.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Workouts</h5>
                </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="trending-blogs-section">
        <h1>
          Trending Blogs
        </h1>

        <div className="all-tending-blogs d-flex flex-wrap justify-content-between row-gap-2">
          {
            blogs.map(blog => (
              <TrendingBlog key={blog.id} blog={blog}/>
            ))
          }
        </div>


        <br /><br /><br />
      </div>
    </>
  )
}

export default Home