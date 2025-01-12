

// export default function BlogFooter() {
//   return (
//     <footer className="mt-12 text-center">
//       <p className="text-sm text-gray-600 mb-4">Follow Us</p>
//       <div className="flex justify-center space-x-6">
//         {['Facebook', 'Twitter', 'Instagram'].map((social) => (
//           <Link key={social} href="#" className="text-gray-400 hover:text-gray-600">
//             <span className="sr-only">{social}</span>
//             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//              <p>Facebook</p>  <p>insta</p>
//             </svg>
//           </Link>
//         ))}
//       </div>
//     </footer>
//   )
// }



// export default function BlogFooter() {
//   return (
//     <footer className="mt-12 text-center">
//       <p className="text-sm text-gray-600 mb-4">Follow Us</p>
//       <div className="flex justify-center space-x-6">
//         {[
//           { name: <FaFacebookF />, href: '#' },
//           { name: 'T' , href: '#' },
//           { name: 'I', href: '#' },
//         ].map((social) => (
//           <Link key={social.name} href={social.href} className="text-gray-400 hover:text-gray-600">
//             <span className="sr-only">{social.name}</span>
//             <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center">
//               {/* Placeholder using Tailwind CSS */}
//               {/* <span className="text-xs font-bold text-gray-500">{social.name}</span> */}
             
//             </div>
//           </Link>
//         ))}
       
//       </div>
//     </footer>
//   );
// }

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function BlogFooter() {
  return (
    <footer className="mt-12 text-center p-6" style={{ backgroundColor: '#f8f8f8' }}>
      <p className="text-sm text-gray-600 mb-4">Follow Us</p>
      <div className="flex justify-center space-x-6">
        <Link href="#" className="text-gray-400 hover:text-gray-600">
          <div className="h-6 w-6 flex items-center justify-center">
            <FaFacebookF size={20} style={{ color: '#ff4632' }} />
          </div>
        </Link>
        <Link href="#" className="text-gray-400 hover:text-gray-600">
          <div className="h-6 w-6 flex items-center justify-center">
            <FaTwitter size={20} style={{ color: '#ff4632' }} />
          </div>
        </Link>
        <Link href="#" className="text-gray-400 hover:text-gray-600">
          <div className="h-6 w-6 flex items-center justify-center">
            <FaInstagram size={20} style={{ color: '#ff4632' }} />
          </div>
        </Link>
        <Link href="#" className="text-gray-400 hover:text-gray-600">
          <div className="h-6 w-6 flex items-center justify-center">
            <FaLinkedinIn size={20} style={{ color: '#ff4632' }} />
          </div>
        </Link>
      </div>
    </footer>
  );
}

