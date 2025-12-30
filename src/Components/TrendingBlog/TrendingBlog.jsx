import React from 'react'
import { Link } from 'react-router-dom';

const TrendingBlog = (props) => {
    const {blog} = props
    const {id,title,category,content,previewDescription} = blog;

    let image='';
    switch (category){
        case "Travelling":
            image = "Travelling.jpg"
            break;
        case "Cooking":
            image = "cooking.jpg"
            break;
        case "Workouts":
            image = "Fitness.jpg"
            break;
        case "Programming":
            image = "programming.jpg"
            break;
        case "Health":
            image = "Health.jpg"
            break;
        default:
            image="Banner.jpg"
            break;
    }

  return (
    <Link to={`/Blog/${id}`}>
        <div className="card" style={{width: "18rem"}}>
            <img src={`/media/${image}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted">{category}</p>
                <p className="card-text">{previewDescription}</p>
            </div>
        </div>
    </Link>
  )
}

export default TrendingBlog