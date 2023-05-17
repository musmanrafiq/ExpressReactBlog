import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PostServices from '../dataServices/postServices';

function PostDetail() {

    const { id } = useParams();
    const item = PostServices.getPostById(id);

    return (
        <div className="col-sm-9">
            <h2>{item.title}</h2>
            <h5>
                <span className="glyphicon glyphicon-time"></span> Post by {item.author}, {item.date}.</h5>
            <h5>
                {item.labels.map((lab, index) => {
                    return (
                        <span key={index} className="label label-danger">{lab}</span>
                    )
                })}
            </h5>
            <p>{item.body}</p>

            <br />
            <br /><br />
            <hr />
        </div>
    )
}

export default PostDetail;