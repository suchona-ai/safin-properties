import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const articles = [
  {
    id: 1,
    slug: "hidden-costs-london-property-management",
    title: "The Hidden Costs of London Property Management: What Savvy Landlords Need to Know",
    description: "This title addresses a crucial pain point and promises valuable insider knowledge",
    content: "Full content of the blog post goes here...",
    author: "Dr. Peter",
    authorimg: "/author/Peter.png",
    imageSrc: "/lgcarwoman.png",
    authorInfo: "Dr. Peter is a renowned veterinarian with over 20 years of experience in animal care. He specializes in canine health and wellness.",
    profession: "Veterinarian",
    publishedOn: "October 10, 2023",
  },
  {
    id: 2,
    slug: "london-property-hotspots-2025",
    title: "From Mayfair to Hackney: Understanding London's Property Hotspots in 2025",
    description: "Timely, specific, and demonstrates market-wide expertise",
    content: "Full content of the blog post goes here...",
    author: "Dr. Julian",
    authorimg: "/author/Julian.png",
    imageSrc: "/lemon.png",
    authorInfo: "Dr. Julian is a property market analyst with a focus on urban development.",
    profession: "Property Market Analyst",
    publishedOn: "October 12, 2023",
  },
  {
    id: 3,
    slug: "investment-properties-london-guide",
    title: "Investment Properties in London: A Complete Guide to Building Your Portfolio",
    description: "Comprehensive and appeals to growth-minded investors",
    content: "Full content of the blog post goes here...",
    author: "Dr. Stephaan",
    authorimg: "/author/Stephaan.png",
    imageSrc: "/dog.jpeg",
    authorInfo: "Dr. Stephaan is an investment strategist with a passion for real estate.",
    profession: "Investment Strategist",
    publishedOn: "October 15, 2023",
  },
  {
    id: 4,
    slug: "property-management-mistakes-london-landlords",
    title: "5 Critical Property Management Mistakes Even Experienced London Landlords Make",
    description: "Catches attention with the promise of avoiding costly errors",
    content: "Full content of the blog post goes here...",
    author: "Dr. Treat",
    authorimg: "/author/Treat.png",
    imageSrc: "/smcarddog.png",
    authorInfo: "Dr. Treat is a seasoned property manager with expertise in tenant relations.",
    profession: "Property Manager",
    publishedOn: "October 18, 2023",
  },
  {
    id: 5,
    slug: "navigating-london-property-market-guide",
    title: "The Ultimate Guide to Navigating London's Property Market: Insights from 20 Years of Experience",
    description: "Establishes strong authority and promises deep expertise",
    content: "Full content of the blog post goes here...",
    author: "Dr. Erol",
    authorimg: "/author/Erol.png",
    imageSrc: "/smcarddog2.png",
    authorInfo: "Dr. Erol is a real estate veteran with two decades of experience in the London market.",
    profession: "Real Estate Veteran",
    publishedOn: "October 20, 2023",
  },
  {
    id: 6,
    slug: "london-buy-to-let-maximizing-returns",
    title: "London Buy-to-Let Properties: Maximizing Returns Through Expert Management",
    description: "Focuses on profit potential, a key concern for investors",
    content: "Full content of the blog post goes here...",
    author: "Dr. Pet",
    authorimg: "/author/pet.png",
    imageSrc: "/smcardcat.png",
    authorInfo: "Dr. Pet is a financial advisor specializing in buy-to-let investments.",
    profession: "Financial Advisor",
    publishedOn: "October 22, 2023",
  },
  {
    id: 7,
    slug: "london-property-laws-updates",
    title: "London's Property Laws: Essential Updates Every Landlord Should Know",
    description: "Addresses critical compliance needs and stays relevant with updates",
    content: "Full content of the blog post goes here...",
    author: "Dr. John",
    authorimg: "/author/john.png",
    imageSrc: "/cardwoman.png",
    authorInfo: "Dr. John is a legal expert in property law with a focus on landlord-tenant regulations.",
    profession: "Legal Expert",
    publishedOn: "October 25, 2023",
  },
  {
    id: 8,
    slug: "professional-property-management-protects-investment",
    title: "Beyond Basic Maintenance: How Professional Property Management Protects Your Investment",
    description: "Demonstrates value proposition and focuses on asset protection",
    content: "Full content of the blog post goes here...",
    author: "Dr. John",
    authorimg: "/author/john.png",
    imageSrc: "/cardwoman.png",
    authorInfo: "Dr. John is a legal expert in property law with a focus on landlord-tenant regulations.",
    profession: "Legal Expert",
    publishedOn: "October 28, 2023",
  },
  {
    id: 9,
    slug: "prime-london-properties-market-analysis",
    title: "Prime London Properties: Market Analysis and Investment Opportunities",
    description: "Appeals to high-end investors with specific market insights",
    content: "Full content of the blog post goes here...",
    author: "Dr. John",
    authorimg: "/author/john.png",
    imageSrc: "/cardwoman.png",
    authorInfo: "Dr. John is a legal expert in property law with a focus on landlord-tenant regulations.",
    profession: "Legal Expert",
    publishedOn: "October 30, 2023",
  },
  {
    id: 10,
    slug: "tenant-screening-london-landlords-blueprint",
    title: "The Art of Tenant Screening: A London Landlord's Blueprint for Success",
    description: "Provides a strategic approach to tenant selection",
    content: "Full content of the blog post goes here...",
    author: "Dr. John",
    authorimg: "/author/john.png",
    imageSrc: "/cardwoman.png",
    authorInfo: "Dr. John is a legal expert in property law with a focus on landlord-tenant regulations.",
    profession: "Legal Expert",
    publishedOn: "November 1, 2023",
  },
]

export async function generateStaticParams() {
  return articles.map(article => ({
    slug: article.slug,
  }))
}

export default function BlogPost({ params }) {
  const { slug } = params
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 md:px-12 py-8">
        <article className="prose lg:prose-xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-2xl text-gray-700 mb-6">{article.description}</p>
          <div className="flex justify-center items-center mb-6">
            <Image
              src={article.authorimg}
              alt={article.author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-4 text-left max-w-md">
              <p className="font-bold">{article.author}</p>
              <p className="text-sm text-gray-600">{article.profession}</p>
              <p className="text-sm text-gray-600">Published on {article.publishedOn}</p>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <Image
              src={article.imageSrc}
              alt={article.title}
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg leading-relaxed">{article.content}</p>
        </article>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-4">About the Author</h2>
          <div className="flex items-start justify-center mt-4">
            <Image
              src={article.authorimg}
              alt={article.author}
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <div className="max-w-md">
              <p className="font-bold">{article.author}</p>
              <p className="text-sm text-gray-600">{article.profession}</p>
              <p className="mt-2">{article.authorInfo}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 