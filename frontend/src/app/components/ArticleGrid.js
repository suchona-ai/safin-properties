import BlogCard from "./BlogCard"

const articles = [
  {
    id: 1,
    slug: "hidden-costs-london-property-management",
    title: "The Hidden Costs of London Property Management: What Savvy Landlords Need to Know",
    description: "This title addresses a crucial pain point and promises valuable insider knowledge",
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
    author: "Dr. John",
    authorimg: "/author/john.png",
    imageSrc: "/cardwoman.png",
    authorInfo: "Dr. John is a legal expert in property law with a focus on landlord-tenant regulations.",
    profession: "Legal Expert",
    publishedOn: "November 1, 2023",
  },
]

export default function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map(article => (
        <BlogCard key={article.id} {...article} />
      ))}
    </div>
  )
}

export async function generateStaticParams() {
  return articles.map(article => ({
    slug: article.slug,
  }))
}