import React from "react";
import posts from "../data/posts.json";
import {Link, useHistory} from "react-router-dom";


function BlogOverviewPage() {

    const history = useHistory();
    function getId(id) {
        history.push("/blogposts/"+id)
        console.log(id);
    }

    return (
        <div className="blogpost-container">
            <h1>Blog overzichtspagina</h1>
            <h4>Aantal Blogposts: {posts.length}</h4>
            <ul>
                  <Link to={history} > {posts.map((post) => <li key={post.id} onClick={() => getId(post.id) }> {post.title}</li>)}  </Link>
            </ul>
        </div>
    );
}

export default BlogOverviewPage;