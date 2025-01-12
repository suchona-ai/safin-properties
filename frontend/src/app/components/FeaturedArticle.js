import Image from "next/image";
import Link from "next/link";

export default function FeaturedArticle() {
  const featuredArticle = {
    slug: "hidden-costs-london-property-management",
    title: "The Hidden Costs of London Property Management: What Savvy Landlords Need to Know",
    description: "This title addresses a crucial pain point and promises valuable insider knowledge",
    imageSrc: "/lgcarwoman.png",
    author: "Dr. Peter",
    authorImg: "/author/Peter.png",
  };

  return (
    <article className="featured-article">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            src={featuredArticle.imageSrc}
            alt={featuredArticle.title}
            width={800}
            height={400}
            className="featured-image"
          />
        </div>
        <div className="featured-content">
          <h2 className="featured-title">
            <Link href={`/blog/${featuredArticle.slug}`}>
              {featuredArticle.title}
            </Link>
          </h2>
          <p className="featured-description">
            {featuredArticle.description}
          </p>
          <div className="author-info">
            <Image
              src={featuredArticle.authorImg}
              alt={featuredArticle.author}
              width={60}
              height={60}
              className="author-avatar"
            />
            <span className="author-name">{featuredArticle.author}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
