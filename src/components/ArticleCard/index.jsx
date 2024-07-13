import styles from './styles.module.css'

function ArticleCard (props) {
    return (
        <article className={styles.container}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.content}>{props.content}</p>
            <img className={styles.articleImg}src={props.articleImg} alt={props.altText} />
        </article>
    )
}

export default ArticleCard