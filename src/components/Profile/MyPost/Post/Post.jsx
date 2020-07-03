import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (


        <div className={s.item}>

            <img src='https://m.media-amazon.com/images/M/MV5BMjM2OTkyNTY3N15BMl5BanBnXkFtZTgwNzgzNDc2NjE@._V1_CR132,0,761,428_AL_UY268_CR82,0,477,268_AL_.jpg' />
                {props.message}
                
            <div>
                <span>like {props.like}</span>
            </div>
        </div>


    )
}
export default Post