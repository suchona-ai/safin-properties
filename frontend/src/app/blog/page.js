import Header from '../components/Header'
import BlogFooter from '../components/BlogFooter'
import CategoryFilter from '../components/CategoryFilter'
import FeaturedArticle from '../components/FeaturedArticle'
import ArticleGrid from '../components/ArticleGrid'
import "../globals.css";

export default function Blog() {
  return (
    <div className="font-sans">
      <Header />

      <div className="container-wrapper">

        <FeaturedArticle />
        <ArticleGrid />
      </div>

      <BlogFooter />
    </div>
  )
}
