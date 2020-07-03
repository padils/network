import React from 'react';
import Post from './Post/Post';
import s from './MyPost.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from './../../../parts/validations';
import { Textarea } from './../../../parts/FormsControls';

let maxLength15 = maxLength(15);

const MyPost = React.memo((props) => {


    let postElem = props.Post.map(p => <Post message={p.message} like={p.like} key={p.id} />);

    let addPost = (values) => {

         props.addPostAction(values.addPost);

    }
  
    return (


      
            <div className={s.postBlock}>
                <h3> My posts  </h3>
                <MyPostForm onSubmit={addPost} />
                <div className={s.post}>
                    {postElem}
                </div>
    
            </div>
      
    )
}
)
let MyPostForm = (props) => {
 
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={Textarea} name="addPost" validate={[required,maxLength15]} label="addPost" />
            </div>
            <div>
                <button >Add Post</button>
            </div>
        </form>
    )
}

MyPostForm = reduxForm({form:'addPostForm'})(MyPostForm)
export default MyPost