import React, { useEffect } from "react"
import { RouteComponentProps, useParams } from 'react-router-dom'
import authorImage from '../../../images/jdoe.jpg'
import CourseContentTable, { chapters } from "./CourseContentTable"
import CourseReviewsRating from "./CourseReviewsRating"
import CourseReviewsSlider from "./CourseReviewsSlider"
interface ICourseHomeRouteParams {
    id?: string | undefined
}
const CourseHome: React.FC<RouteComponentProps<ICourseHomeRouteParams>> = () => {

    const { id } = useParams<ICourseHomeRouteParams>()
    const author = "John Doe"
    const courseName = "The Most Awesome Course Name Ever"
    let coursePrice = 19.99
    useEffect(() => {
        // fetch course information
    }, [])

    const courseContentChapters : chapters =  [
        {
            number : 1,
            heading : "Introduction",
            contents : [
                { heading: "What is Programming?", duration : "30 minutes" },
                { heading: "What is HTML?", duration : "1 hour" },
                { heading: "What is CSS?", duration : "1 hour" },
                { heading: "What is JavaScript?", duration : "1 hour" }
            ]
        },
        {
            number : 2,
            heading : "HTML",
            contents : [
                { heading: "The Text Editor", duration : "30 minutes" },
                { heading: "Setting up VS Code", duration : "30 minutes" },
                { heading: "The Head and Body Tags", duration : "1 hour" },
                { heading: "Writing good HTML", duration : "1 hour" }
            ]
        }
    ] 

    return (
        <div>
            <div className="course-details-top">

                {/* <h3 className='course-home-course-id'>
                    Course id: {id}
                </h3> */}
                <h4 className='course-details-course-author'>
                    <div className="author-img-thumbnail-holder">
                        <img src={authorImage} className="author-img-thumbnail"></img>
                    </div>
                    Authored by: {author}
                </h4>
                <h1 className='course-details-course-name'>
                    {courseName}
                </h1>
                <div className="course-details-purchase-course">
                    <h2 className='course-details-course-price'>
                        $ { coursePrice }
                    </h2>
                    <button className='buy-course-button'>
                        BUY Course
                    </button>
                </div>
            </div>
            <div className="course-details-main">
                <div className="course-brief">
                    <h2 className='course-brief-heading'>
                        Course Brief
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean magna metus, finibus eu est eget, eleifend lacinia erat. Fusce sollicitudin viverra erat, vel pellentesque quam. Vestibulum feugiat, arcu at lobortis vulputate, risus dui aliquet mi, sed suscipit ipsum mauris sit amet nunc. Praesent et malesuada leo, non mollis odio. Quisque libero metus, mollis at varius eu, fermentum et elit. Cras faucibus tincidunt elit vel porta. Quisque lectus odio, consequat eu consectetur dapibus, molestie varius ex. Integer sed ornare neque. Vivamus eget vulputate turpis. Ut posuere pellentesque dapibus. Vivamus et lobortis nisi. Quisque lobortis, justo ac tincidunt elementum, odio metus viverra purus, vel facilisis felis velit consequat urna. Nullam facilisis libero eget dapibus sollicitudin. Vivamus sem magna, lobortis quis blandit id, scelerisque blandit magna. Etiam ullamcorper purus vitae eros iaculis, eu fringilla justo rhoncus.
                    </p>
                </div>

                <br/>
                <br/>
                <hr style={ {width: "60%"} }/>
                <br/>
                <br/>
                

                <div className='course-contents-region'>
                    <h2>
                        Course Contents
                    </h2>
                    <CourseContentTable chapters={ courseContentChapters } />
                </div>


                <br/>
                <br/>
                <hr style={ {width: "60%"} }/>
                <br/>
                <br/>

                <div className="course-reviews-region">
                    <h2>
                        Reviews
                    </h2>
                    <div className="course-reviews-rating-region">
                        <CourseReviewsRating rating={4.7} />
                    </div>
                    <div className="course-reviews-slider-region">
                        <CourseReviewsSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseHome
