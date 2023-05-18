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
    }
};

export default PostServices;