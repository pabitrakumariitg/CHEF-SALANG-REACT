import Image from 'next/image';
import { ArrowRight, Instagram } from 'lucide-react';

export const metadata = {
  title: 'Products | Chef Salang Yanger',
  description: "Explore Chef Salang's exclusive line of authentic Naga food products including specialty sausages, fermented goods, and artisanal condiments.",
};

const products = [
  {
    id: 1,
    name: "Traditional Naga Sausages",
    description: "Handcrafted smoked pork sausages made with authentic Naga spices and herbs. Perfect for grilling or adding to stews.",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=2960&auto=format&fit=crop",
    price: "₹450 / pack",
    category: "Meats"
  },
  {
    id: 2,
    name: "Axone (Fermented Soybean)",
    description: "Traditional fermented soybean paste, a Naga kitchen essential. Use as a base for curries or as a flavorful condiment.",
    image: "https://images.unsplash.com/photo-1620057657132-4dbeebfea8cb?q=80&w=2788&auto=format&fit=crop",
    price: "₹350 / jar",
    category: "Fermented Goods"
  },
  {
    id: 3,
    name: "Raja Mircha Hot Sauce",
    description: "Chef Salang's signature hot sauce made with the famous Naga ghost peppers. Adds authentic heat to any dish.",
    image: "https://images.unsplash.com/photo-1620636670545-8436cc7241dc?q=80&w=2787&auto=format&fit=crop",
    price: "₹300 / bottle",
    category: "Condiments"
  },
  {
    id: 4,
    name: "Bamboo Shoot Pickle",
    description: "Traditional Naga style pickled bamboo shoots with aromatic spices. A perfect accompaniment to rice dishes.",
    image: "https://images.unsplash.com/photo-1584535058895-0b4c0031abe1?q=80&w=2835&auto=format&fit=crop",
    price: "₹380 / jar",
    category: "Pickles"
  },
  {
    id: 5,
    name: "Wild Forest Honey",
    description: "Pure, raw honey harvested from Nagaland's forests. Unprocessed with all natural health benefits intact.",
    image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?q=80&w=2940&auto=format&fit=crop",
    price: "₹650 / bottle",
    category: "Sweets"
  },
  {
    id: 6,
    name: "Naga Herb & Spice Blend",
    description: "Chef Salang's proprietary blend of indigenous herbs and spices. Perfect for marinades and seasonings.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2940&auto=format&fit=crop",
    price: "₹400 / pack",
    category: "Spices"
  },
  {
    id: 7,
    name: "Smoked Naga Pork Jerky",
    description: "Traditional air-dried and smoked pork slices seasoned with authentic Naga spices. Perfect protein-rich snack.",
    image: "https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?q=80&w=2787&auto=format&fit=crop",
    price: "₹550 / pack",
    category: "Meats"
  },
  {
    id: 8,
    name: "Fermented Bamboo Shoot",
    description: "Traditional fermented bamboo shoots, ready to use in authentic Naga recipes or as a side dish.",
    image: "https://images.unsplash.com/photo-1616166358812-48e819a0739a?q=80&w=2864&auto=format&fit=crop",
    price: "₹320 / pack",
    category: "Fermented Goods"
  }
];

export default function ProductsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            Artisanal <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover Chef Salang's exclusive range of authentic Naga food products, 
            handcrafted using traditional methods and premium ingredients
          </p>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-card rounded-lg overflow-hidden card-hover"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">{product.price}</span>
                    <a 
                      href={`https://wa.me/1234567890?text=I'm interested in purchasing ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary hover:bg-opacity-80 transition-all"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Instagram Shop Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center mb-6">
            <Instagram className="w-8 h-8 text-primary mr-3" />
            <h2 className="heading-lg">Shop on Instagram</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Follow Chef Salang on Instagram to browse and shop our complete product collection.
            Direct message us for orders and inquiries.
          </p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Visit Our Instagram Shop
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
      
      {/* Wholesale Inquiry */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Interested in Wholesale?
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto">
            Chef Salang's products are available for wholesale purchase for restaurants, specialty stores, and retailers.
          </p>
          <a 
            href="https://wa.me/1234567890?text=I'm interested in wholesale opportunities for Chef Salang's products" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary inline-flex items-center"
          >
            Contact for Wholesale Inquiries
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
      
      {/* Product Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2787&auto=format&fit=crop"
                alt="Chef Salang preparing products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div>
              <h2 className="heading-lg mb-6">Our Product <span className="text-primary">Philosophy</span></h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every product in Chef Salang's collection is made with the same care and attention to detail 
                that characterizes his cooking. We source ingredients locally from trusted farmers and producers 
                in Nagaland to ensure authenticity and support local communities.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our production methods honor traditional techniques passed down through generations, while incorporating 
                modern food safety standards. Each batch is personally approved by Chef Salang to maintain quality and consistency.
              </p>
              <p className="text-lg text-muted-foreground">
                From our kitchen to your table, these products offer a taste of authentic Naga cuisine and culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
