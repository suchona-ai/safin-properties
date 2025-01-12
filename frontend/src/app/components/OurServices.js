// import '../globals.css';
// export default function OurServices() {
//     const services = [
//       "Property Management",
//       "Selling",
//       "Letting",
//       "Property Valuation",
//       "Legal Assistance",
//     ];
  
//     return (
//         <section className="services-section container-padding">
//         <div className="container mx-auto">
//           <h2 className="section-title">Our Services</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <img src='/cart.png' alt={service} className="service-icon" />
//                 <p className="text-center">{service}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }


// import '../globals.css';
// import Image from 'next/image';

// export default function OurServices() {
//   const services = [
//     {
//       name: "Buying",
//       imageUrl: "/servicesimg/cart.png",
//       description:"Find your dream property"
//     },
//     {
//       name: "Selling",
//       imageUrl: "/servicesimg/camera.png",
//       description:"Get the best price for your property"
//     },
//     {
//       name: "Repair",
//       imageUrl: "/servicesimg/repair.png",
//       description:"Professional repair services"
//     },
//     {
//       name: "Maintenance",
//       imageUrl: "/servicesimg/maintenance.png",
//       description:"Keep your property in top condition"
//     },
 
//   ];

//   return (
//     <section className="services-section container-padding">
//       <div className="container mx-auto">
//         <h2 className="section-title">Our Services</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <Image 
//                 src={service.imageUrl} 
//                 alt={service.name} 
//                 width={50} 
//                 height={50}
//                 className="service-icon" 
//               />
//               <p className="text-center">{service.name}</p>
//               <p className="text-center">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import '../globals.css';
import Image from 'next/image';

export default function OurServices() {
  const services = [
    {
      name: "Buying",
      imageUrl: "/servicesimg/buying.png",
      description: "Find your dream property",
    },
    {
      name: "Selling",
      imageUrl: "/servicesimg/sell.png",
      description: "Get the best price for your property",
    },
    {
      name: "Repair",
      imageUrl: "/servicesimg/repair2.png",
      description: "Professional repair services",
    },
    {
      name: "Maintenance",
      imageUrl: "/servicesimg/maintance.jpg",
      description: "Keep your property in top condition",
    },
  ];

  return (
    <section className="services-section container-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-full h-32">
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-center">{service.name}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

