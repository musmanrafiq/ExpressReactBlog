import { useState, useEffect } from "react";
import PostServices from "../dataServices/postServices";
import { Link, useLocation } from 'react-router-dom';

function Posts() {

    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const param = searchParams.get("query");

    useEffect(() => {
        // issue side-effect
        //debugger;
        console.log(param);

        if (param) {
            getSearchedPosts();
        }
        else {
            getPosts();
        }

        async function getPosts() {
            const postList = await PostServices.getPosts();
            setPosts(postList);
        }
        async function getSearchedPosts() {
            const postList = await PostServices.getPostsBySearch(param);
            setPosts(postList);
        }
    }, [param]);


    const [posts, setPosts] = useState([]);

    return (
        <>

            {
                posts.map((item) => {
                    return (
                        <>
                            <h2>
                                <Link to={`/post/${item.id}`}> {item.title} </Link></h2>
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
                            <div>...
                                <Link to={`/post/${item.id}`}>... more </Link>
                            </div>
                            <hr />
                        </>
                    )
                })
            }

        </>
    )
}

export default Posts;