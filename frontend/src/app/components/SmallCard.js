// components/SmallCard.js
import Image from 'next/image';

export default function SmallCard({ title, description, author, imageSrc , authorimg}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col">
      <div className="h-48 relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center">
          <Image
            src={authorimg}
            alt={author}
            width={50}
            height={50}
            className="author-avatar"
          />
          <span className="text-xs text-gray-700">{author}</span>
        </div>
      </div>
    </div>
  );
}