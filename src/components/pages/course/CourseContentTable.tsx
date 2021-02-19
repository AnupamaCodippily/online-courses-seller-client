import React from 'react'

interface ICourseContentChapter {
    number: number,
    heading: string,
    description?: string,
    contents:
    { heading: string, duration: string }[]
}

export type chapters = ICourseContentChapter[]

const ChapterLesson: React.FC<{ heading: string, duration: string }> = ({ heading, duration }) => {
    return (
        <div className="contents-chapter-lesson" style={{ display: 'flex' }}>
            <b className='small-play-button-coral'> &nbsp; ▶ &nbsp; </b>   
            <> { heading} </>
            <div className='contents-duration'> { duration} </div>
        </div>
    )
}

const TableChapter: React.FC<{ chapter: ICourseContentChapter  }> = ({ chapter }) => {

    let key = 0
    const lessons = chapter.contents.map(chapter => (<ChapterLesson key={ key++ } duration={chapter.duration} heading={chapter.heading} />))

    return (

            <div className="contents-chapter">
                        <h3>
                            Chapter {chapter.number} : {chapter.heading}
                        </h3>
                        {(chapter.description) ? <p> {chapter.description} </p> : null}
                <div className='chapter-lessons'>
                    {lessons}
                </div>

            </div>
    )
}

const CourseContentTable: React.FC<{ chapters: chapters }> = ({ chapters }) => {
    let eventKey = 0;
    return (
        <div className='course-contents-table'>
            {
                chapters.map(chapter => {
                    return (<TableChapter chapter={chapter} key={eventKey++} />)
                })
            }
        </div>
    )
}

export default CourseContentTable
