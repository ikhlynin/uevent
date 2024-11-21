import React, { useState } from 'react';
import luffy from './assets/luffy.jpg';

import "./style.css"

const Comments = () => {
    const [commentsList, setCommentsList] = useState([
        // { name: 'Максим', content: 'бла бла бла' }
    ]);
    const [content, setContent] = useState('');

    async function PostComment() {
        console.log(content)
        setCommentsList(commentsList => [...commentsList, { name: 'Луффі', content: content }])
    }

    return (
        <div className='event_opened_subslist'>
            <p className='event_opened_description'>Коментарі</p>
            {commentsList.map((item, index) =>
                <div className='event_opened_flex_row' key={index}>
                    <img src={luffy} alt="aboba" className='event_opened_comment_avatar' />

                    <div className='event_opened_flex_col'>
                        <p className='event_opened_comment_name'>{item.name}</p>
                        <p className='event_opened_comment_content'>{item.content}</p>
                    </div>
                </div>
            )}
            <p className='event_opened_description'>Додати коментар</p>

            <div className='comments_container'>
                <div className='new_comment'>
                    <span>New comment:</span>
                    <textarea type="text" rows={5} placeholder='enter your opinion...' onChange={e => setContent(e.target.value)} />
                    <button className='new_comment_button' onClick={PostComment}>Post</button>
                </div>
            </div>
        </div>
    )
}
export default Comments;