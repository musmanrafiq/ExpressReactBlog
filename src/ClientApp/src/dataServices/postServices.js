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
    getPostsBySearch: (searchTerm) => {
        searchTerm = searchTerm.toLocaleLowerCase();
        const posts = postList.filter(x => x.title.toLocaleLowerCase()
            .includes(searchTerm)
            || x.body.toLocaleLowerCase().includes(searchTerm));
        return posts;
    }
};

export default PostServices;