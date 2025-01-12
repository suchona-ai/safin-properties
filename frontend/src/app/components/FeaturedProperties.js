import '../globals.css';

export default function FeaturedProperties() {
    const properties = [
      {
        title: "Luxurious Apartment",
        description: "Modern living in the heart of London",
        price: "£2,500,000",
        img:"/LuxuriousApartment.png"
      },
      {
        title: "Spacious Townhouse",
        description: "Elegant living in a quiet neighborhood",
        price: "£1,800,000",
        img:"/SpaciousTownhouse.png"
      },
      {
        title: "Charming Historical House",
        description: "A piece of London's rich history",
        price: "£3,200,000",
        img:"/CharmingHistoricalHouse.png"
      },
    ];
  
    return (
        <section className="container mx-auto container-padding">
        <h2 className="section-title">Featured Properties</h2>
        <div className="grid-responsive">
          {properties.map((property, index) => (
            <div key={index} className="card">
              <img src={property.img} alt={property.title} className="property-card-image" />
              <div className="card-body">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-description">{property.description}</p>
                <p className="property-price">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  