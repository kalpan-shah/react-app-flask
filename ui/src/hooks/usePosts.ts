/* Dependencies */
import { useState, useEffect } from 'react';
import { Post } from '../models/Post';
import { get } from '../services/apiService';


export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async () => {
        const url: string = "https://jsonplaceholder.typicode.com/posts";
        const fetchPosts = await get<Post[]>(url);
        setPosts(fetchPosts);
    }

    useEffect(() => { getPosts() }, []);

    return posts;
}