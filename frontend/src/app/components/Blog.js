import ArticleGrid from "./ArticleGrid";
import CategoryFilter from "./CategoryFilter";
import FeaturedArticle from "./FeaturedArticle";
import Footer from "./Footer";
import Header from "./Header";

export default function Blog() {
    return (
      <main className="container mx-auto px-4 py-8">
        <Header />
        <CategoryFilter />
        <FeaturedArticle />
        <ArticleGrid />
        <Footer />
      </main>
    )
  }