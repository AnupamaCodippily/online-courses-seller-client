import React from 'react'

const RatingStar : React.FC <{ fill: number }> = ({ fill }) => {
    return (
        <div className="rating-star" style={{ background: 'linear-gradient(to right, #ee0979, #ff6a00' }}>
            ⭐
        </div>
    )
}

const Stars : React.FC <{rating : number}> = ({rating}) => {
    
    let fullStars =  Math.floor(rating)

    const stars = []
    let i = 0
    for (i; i < fullStars; i++ ) stars.push(<RatingStar fill={100} key={i}></RatingStar>)

    let decimalStar = Math.ceil(rating) - fullStars

    stars.push(<RatingStar fill={100 * decimalStar} key={i}></RatingStar>)

    return (
        <div style={ {display: 'flex'} }>
            {stars.map(star => star)}
        </div>
    )
}

const CourseReviewsRating : React.FC <{rating: number}> = ( {rating} ) => {


    return (
        <div>
            <h1 className='star-rating-number'>
                Rating: {rating}
            </h1>
            <div className='star-rating'>
                <Stars rating={rating} />
            </div>
        </div>
    )
}

export default CourseReviewsRating