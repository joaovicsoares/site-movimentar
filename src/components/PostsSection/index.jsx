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
                console.log('Posts:', response.data);
            } catch (error) {
                console.error('Erro ao buscar dados do Instagram:', error);
            }
        };

        getPosts();
    }, []);

    return (
        // <section className={styles.feedSection}>
        //      {posts.map(post => (
        //         <div key={post.id}>
        //             {post.media_type === 'IMAGE' ? <img className={styles.feedImg} src={post.media_url} alt={post.caption || 'postagem do instagram'}/> : (
        //                 <video controls>
        //                     <source src={post.media_url} type="video/mp4"/>
        //                 </video>
        //             )}
        //         </div>
        //      ))}
        // </section>
//         <section className={styles.feedSection}>
//     {posts.map(post => (
//         <div key={post.id}>
//             {post.media_type === 'IMAGE' && (
//                 <img className={styles.feedImg} src={post.media_url} alt={post.caption || 'Postagem do Instagram'} />
//             )}
//             {post.media_type === 'VIDEO' && (
//                 <video controls className={styles.feedVideo}>
//                     <source src={post.media_url} type="video/mp4" />
//                     Seu navegador não suporta vídeos.
//                 </video>
//             )}
//             {post.media_type === 'CAROUSEL_ALBUM' && post.carousel_media && (
//                 <div className={styles.carousel}>
//                     {post.carousel_media.map((item, index) => (
//                         <div key={index}>
//                             {item.media_type === 'IMAGE' && (
//                                 <img className={styles.carouselImg} src={item.media_url} alt={item.caption || 'Item do álbum'} />
//                             )}
//                             {item.media_type === 'VIDEO' && (
//                                 <video controls className={styles.carouselVideo}>
//                                     <source src={item.media_url} type="video/mp4" />
//                                     Seu navegador não suporta vídeos.
//                                 </video>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     ))}
// </section>

<section className={styles.feedSection}>
{posts.map(post => (
    <div key={post.id}>
        {post.media_type === 'IMAGE' && (
            <img className={styles.feedImg} src={post.media_url} alt={post.caption || 'postagem do instagram'} />
        )}
        {post.media_type === 'VIDEO' && (
            <video controls>
                <source src={post.media_url} type="video/mp4" />
            </video>
        )}
        {post.media_type === 'CAROUSEL_ALBUM' && (
            <img className={styles.feedImg} src={post.media_url} alt={post.caption || 'postagem do instagram'} />
        )}
    </div>
))}
</section>
    )
}

export default PostsSection

