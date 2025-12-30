import React from 'react'
import Banner from '../../Components/Banner/Banner'
import blogs from '../../Utils/MockData'
import { useParams } from 'react-router-dom'

const DedicatedBlog = () => {
    const { id } = useParams()

    const blogToDisplay = blogs.filter(
        blog => blog.id === Number(id)
    )[0]

    if (!blogToDisplay) {
        return <h2 className="text-center mt-5">Blog not found</h2>
    }

    return (
        <>
            <Banner />
            <h1>{blogToDisplay.title}</h1>
            <h6>{blogToDisplay.category}</h6>
            <p>{blogToDisplay.content}</p>
        </>
    )
}

export default DedicatedBlog
