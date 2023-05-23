import { useState } from "react";
import PostServices from "../../dataServices/postServices";

function AddPost() {

    const [title, setTitle] = useState('');


    const titleChange = (evnt) => {
        const title = evnt.target.value;
        setTitle(title);
    }
    const addPost = async (evnt) => {
        debugger
        const res = await PostServices.addPost({ title });
    }
    return (
        <div>
            <p>Add a new post</p>

            <input value={title} onChange={titleChange} type="text" name="title" className="form-control" />
            <button onClick={addPost}>Add Post</button>
        </div>
    )
}

export default AddPost;