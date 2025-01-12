import Image from 'next/image';

export default function LargeCard({ title, description, author, imageSrc,authorimg }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row">
      <div className="md:w-1/3 h-48 md:h-auto relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 md:w-2/3">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center">
          <Image
            src={authorimg}
            alt={author}
            width={50}
            height={50}
            className="author-avatar"
          />
          <span className="text-sm text-gray-700">{author}</span>
        </div>
      </div>
    </div>
  );
}