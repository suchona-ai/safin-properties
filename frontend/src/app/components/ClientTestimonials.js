import '../globals.css';
import Image from 'next/image';

export default function ClientTestimonials() {
    const testimonials = [
        {
            name: "John Smith",
            quote: "Safin Properties provided excellent service throughout my property search.",
            img: '/clients/John.png'
        },
        {
            name: "Maria Garcia",
            quote: "The team at Safin Properties made selling my home a breeze.",
            img: '/clients/maria.png'
        },
        {
            name: "Alex Johnson",
            quote: "I highly recommend Safin Properties for their professionalism and expertise.",
            img: '/clients/alex.png'
        },
    ];

    return (
        <section className="container mx-auto container-padding">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="grid-responsive">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="card text-center">
                        <div className="card-body">
                            <Image 
                                src={testimonial.img} 
                                alt={testimonial.name} 
                                width={64} 
                                height={64} 
                                className="testimonial-avatar" 
                            />
                            <p className="testimonial-quote">"{testimonial.quote}"</p>
                            <p className="testimonial-author">{testimonial.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
