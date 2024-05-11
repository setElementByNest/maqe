import React from 'react'
import dayjs from 'dayjs'
import './style.css'

function Boxcontent({ authors, posts }) {
    const evenPost = () => {
        if (posts.id % 2 == 0) {
            return true
        } else {
            return false
        }
    }

    const formatDate = (dateStr) => {
        const date = dayjs(dateStr);
        return date.format('dddd, MMMM D, YYYY, HH:mm');
    };

    return (
        <div className='boxcontent' style={{ background: evenPost() ? '#ccecff' : '#ffffff' }}>
            <div className="boxcontent-author">
                <img src={authors.avatar_url} alt="" />
                <p style={{ color: '#f84d20', margin: '0 10px 0 0' }}>{authors.name}</p>
                <p style={{ color: '#666666' }}>posted on {formatDate(posts.created_at)}</p>
            </div>
            <div className="boxcontent-post">
                <div className="box-post-img">
                    <img src={posts.image_url} alt="" />
                </div>
                <div className="box-post-text">
                    <h4>{posts.title}</h4>
                    <p>{posts.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Boxcontent
