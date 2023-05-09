import { useState } from "react";
import PostServices from "../dataServices/postServices";

function Posts() {

    const postList = PostServices.getPosts();
    const [posts, setPosts] = useState(postList);

    return (
        <>

            {
                posts.map((item) => {
                    return (
                        <>
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
                            <div>... <a href={item.detailsLink}>... more </a></div>
                            <hr />
                        </>
                    )
                })
            }

        </>
    )
}

export default Posts;