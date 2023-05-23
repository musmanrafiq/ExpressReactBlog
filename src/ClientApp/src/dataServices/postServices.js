const postList = [];

const PostServices = {
    getPosts: async function () {
        const postResponse = await fetch('http://localhost:4400/posts');
        const posts = postResponse.json();
        return posts;
    },
    getPostById: (id) => {
        debugger;
        const post = postList.find(x => x.id == id);
        return post;
    },
    getPostsBySearch: async (searchTerm) => {
        searchTerm = searchTerm.toLocaleLowerCase();
        const postResponse = await fetch('http://localhost:4400/posts?search=' + searchTerm);
        const posts = postResponse.json();
        return posts;
    },
    addPost: async function (body) {
        debugger
        const postResponse = await fetch('http://localhost:4400/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(body)
        });
        //const posts = postResponse.json();
        return postResponse;
    },
};

export default PostServices;