import Image from 'next/image'
import Link from 'next/link'

export default function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <Image 
        src={article.image} 
        alt={article.title} 
        width={400} 
        height={300}
        className="article-image"
      />
      <div className="article-content">
        <h3 className="article-title">
          <Link href={`/article/${article.id}`}>
            {article.title}
          </Link>
        </h3>
        <p className="article-description">{article.description}</p>
        <div className="author-info">
          <Image 
            src="https://placehold.co/24x24" 
            alt={article.author} 
            width={24} 
            height={24}
            className="author-avatar"
          />
          <span className="author-name">{article.author}</span>
        </div>
      </div>
    </article>
  )
}