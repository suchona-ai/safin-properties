// File: components/Footer.js
import Link from 'next/link';
import '../globals.css';

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-grid">
//         <div>
//           <h3 className="footer-title">LondonAssets</h3>
//           <p>Your trusted partner in buying, selling, and renting high-value assets in London.</p>
//         </div>
//         <div>
//           <h3 className="footer-title">Quick Links</h3>
//           <ul>
//             <li><Link href="/" className="footer-link">Home</Link></li>
//             <li><Link href="/buy" className="footer-link">Buy</Link></li>
//             <li><Link href="/sell" className="footer-link">Sell</Link></li>
//             <li><Link href="/rent" className="footer-link">Rent</Link></li>
//             <li><Link href="/contact" className="footer-link">Contact</Link></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="footer-title">Contact Us</h3>
//           <p>123 Oxford Street, London, UK</p>
//           <p>Phone: +44 20 1234 5678</p>
//           <p>Email: info@londonassets.com</p>
//         </div>
//         {/* <div>
//           <h3 className="footer-title">Follow Us</h3>
//           <div className="flex space-x-4">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
//           </div>
//         </div> */}
//       </div>
//     </footer>
//   );
// }



export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">Safin Properties</h3>
          <p className="text-sm text-gray-600">Your trusted partner in buying, selling, and renting high-value assets in London.</p>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link href="/buy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Buy</Link></li>
            <li><Link href="/sell" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Sell</Link></li>
            <li><Link href="/rent" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Rent</Link></li>
     

            <li><Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-600 mb-2">123 Oxford Street, London, UK</p>
          <p className="text-sm text-gray-600 mb-2">Phone: +44 20 1234 5678</p>
          <p className="text-sm text-gray-600">Email: info@londonassets.com</p>
        </div>
      </div>
    </footer>
  );
}