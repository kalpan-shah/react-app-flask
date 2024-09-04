/* Dependencies */
// import { useEffect, useState } from 'react';
import { Post } from '../models/Post';
import { usePosts } from '../hooks/usePosts';
import PostSlides from './PostSlides';

/* Component Definition */
const PostList: React.FC = () => {

    const posts: Post[] = usePosts();
    return (
        <div>
            <h1>Posts</h1>
            <PostSlides>
                {posts.map(post => (
                    <div key={post.id} style={{ padding: '20px', boxSizing: 'border-box' }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </PostSlides>
        </div>
    );
}

export default PostList;