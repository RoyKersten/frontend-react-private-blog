import React from "react";
import {useParams, Link} from "react-router-dom";
import posts from "../data/posts.json";

function BlogPostPage() {

    const { id } = useParams();

    return (
        <div className="homepage-container">
          <h1>{posts[id-1].title}</h1>
            <h4>{posts[id-1].date}</h4>
            <h4>{posts[id-1].content}</h4>

          <Link to="/">Terug Naar Home</Link>
        </div>
    );
}

export default BlogPostPage;