import Link from 'next/link'

export default function BlogCard({ slug, title, description, author, authorimg, imageSrc }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <Link href={`/blog/${slug}`}>
        <div className="block cursor-pointer">
          <div className="h-48 bg-gray-300">
            {imageSrc && (
              <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            )}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 hover:underline">{title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
            <div className="flex items-center">
              {authorimg && (
                <img
                  src={authorimg}
                  alt={author}
                  className="bg-gray-400 rounded-full mr-2 w-8 h-8 object-cover"
                />
              )}
              <span className="text-xs text-gray-700">{author}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}