import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

function PostsSection () {
    const [posts, setPosts] = useState([])
    const accessToken = import.meta.env.VITE_INSTAGRAM_TOKEN
    const fields = 'media_url,media_type,permalink,caption'
    const url = ` https://graph.instagram.com/me/media?access_token=${accessToken}&fields=${fields}`

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data.data;
                const limitedData = data.slice(0, 8);
                setPosts(limitedData);
                console.log('Posts:', response.data);
            } catch (error) {
                console.error('Erro ao buscar dados do Instagram:', error);
            }
        };

        getPosts();
    }, []);

    return (
        <section className={`center ${styles.feedSection}`}>
        {posts.map(post => (
            <div key={post.id}>
                {post.media_type === 'IMAGE' && (
                    <img className={styles.feedpost} src={post.media_url} alt={post.caption || 'postagem do instagram'} />
                )}
                {post.media_type === 'VIDEO' && (
                    <video className={`${styles.feedpost} ${styles.video}`} controls>
                        <source src={post.media_url} type="video/mp4" />
                    </video>
                )}
                {post.media_type === 'CAROUSEL_ALBUM' && (
                    <img className={styles.feedpost} src={post.media_url} alt={post.caption || 'postagem do instagram'} />
                )}
            </div>
        ))}
        </section>
    )
}

export default PostsSection

