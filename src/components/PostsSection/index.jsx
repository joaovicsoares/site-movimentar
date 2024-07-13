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
                setPosts(response.data.data);
                // console.log('Posts:', response.data.data);
            } catch (error) {
                console.error('Erro ao buscar dados do Instagram:', error);
            }
        };

        getPosts();
    }, []);

    return (
        <section className={styles.feedSection}>
             {posts.map(post => (
                <div key={post.id}>
                    {post.media_type === 'IMAGE' ? <img className={styles.feedImg} src={post.media_url} alt={post.caption || 'postagem do instagram'}/> : (
                        <video controls>
                            <source src={post.media_url} type="video/mp4"/>
                        </video>
                    )}
                </div>
             ))}
        </section>
    )
}

export default PostsSection

