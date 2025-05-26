import Image from 'next/image';
import { ArrowRight, Instagram } from 'lucide-react';

export const metadata = {
  title: 'Products | Chef Salang Yanger',
  description: "Explore Chef Salang's exclusive line of authentic Naga food products including specialty sausages, fermented goods, and artisanal condiments.",
};

const products = [
  // Red Meat Products
  {
    id: 1,
    name: "Crispy Pork",
    description: "Succulent pork fried to crispy perfection with a Naga spice twist. Ideal for snacking or pairing with rice.",
    image: "/images/Crispypork.jpg",
    price: "₹250 /pack",
    category: "Red Meat"
  },
  {
    id: 2,
    name: "Manchow Pork",
    description: "Tender pork stir-fried with bold Naga flavors and Manchow spices. A perfect fusion for your meals.",
    image: "/images/BBQPORK.jpg",
    price: "₹250 /pack",
    category: "Red Meat"
  },
  {
    id: 3,
    name: "BBQ Pork",
    description: "Juicy pork glazed with a smoky BBQ sauce infused with Naga herbs. Great for grilling or as a hearty side.",
    image: "/images/BBQPORK.jpg",
    price: "₹350 /pack",
    category: "Red Meat"
  },
  {
    id: 4,
    name: "Spicy Pork Sausage",
    description: "Handmade pork sausages packed with fiery Naga spices. Add a kick to your stews or grill them up.",
    image: "/images/ChickenBBQ.jpg",
    price: "₹200 /pack",
    category: "Red Meat"
  },
  {
    id: 5,
    name: "Smoked Pork Sausage",
    description: "Traditional smoked pork sausages crafted with authentic Naga spices. Perfect for grilling or stews.",
    image: "/images/Chicken_&_Fish_Roast.jpg",
    price: "₹200 /pack",
    category: "Red Meat"
  },
  {
    id: 6,
    name: "Pork in Black Bean",
    description: "Tender pork cooked in a rich black bean sauce with Naga aromatics. A savory delight for any dish.",
    image: "/images/Chicken_Roast.jpg",
    price: "₹220 /pack",
    category: "Red Meat"
  },
  {
    id: 7,
    name: "Beef Cocktail Sausage",
    description: "Bite-sized beef sausages with a hint of Naga spices. Perfect for appetizers or party snacks.",
    image: "/images/PorkRoast.jpg",
    price: "₹190 /pack",
    category: "Red Meat"
  },
  {
    id: 8,
    name: "Beef Chilli Pot",
    description: "Spicy beef slow-cooked with Naga chillies in a rich pot. A bold dish to spice up your meals.",
    image: "/images/SpicyBeefLiver.png",
    price: "₹250 /pack",
    category: "Red Meat"
  },
  {
    id: 9,
    name: "Beef Masala",
    description: "Succulent beef simmered in a fragrant Naga masala blend. Pairs wonderfully with rice or flatbreads.",
    image: "/images/PorkRoast.jpg",
    price: "₹220 /pack",
    category: "Red Meat"
  },
  {
    id: 10,
    name: "Mughlai Beef",
    description: "Rich beef cooked in a Mughlai-style gravy with Naga spices. A royal treat for your taste buds.",
    image: "/images/BBQPORK.jpg",
    price: "₹220 /pack",
    category: "Red Meat"
  },
  {
    id: 11,
    name: "Mutton Masala",
    description: "Flavorful mutton in a spicy Naga masala mix. A hearty addition to your traditional meals.",
    image: "/images/fried-fish.jpg",
    price: "₹350 /pack",
    category: "Red Meat"
  },
  {
    id: 12,
    name: "Mughali Beef",
    description: "Tender beef in a creamy Mughlai sauce with a Naga twist. Perfect for a festive feast.",
    image: "/images/BBQPORK.jpg",
    price: "₹250 /pack",
    category: "Red Meat"
  },

  // White Meat Products
  {
    id: 13,
    name: "Lang Lang Chicken",
    description: "A Naga-style chicken dish packed with bold flavors and local spices. Perfect for a hearty family meal.",
    image: "/images/ChickenBBQ.jpg",
    price: "₹1500 /pack",
    category: "White Meat"
  },
  {
    id: 14,
    name: "Spicy Wings (Raja Spicy)",
    description: "Juicy chicken wings coated in a fiery Raja Spicy Naga blend. Great for snacking or parties.",
    image: "/images/Chicken_kimbap_.jpg",
    price: "₹220 /pack",
    category: "White Meat"
  },
  {
    id: 15,
    name: "Spicy Chicken (Raja Spicy)",
    description: "Tender chicken infused with Raja Spicy Naga seasoning. A bold dish to spice up your table.",
    image: "/images/Chicken_kimbap_.jpg",
    price: "₹250 /pack",
    category: "White Meat"
  },
  {
    id: 16,
    name: "Whole Chicken Roast (2 kg)",
    description: "Succulent whole chicken roasted with Naga herbs and spices. Ideal for festive gatherings.",
    image: "/images/Chicken_Roast.jpg",
    price: "₹1200 /pack",
    category: "White Meat"
  },
  {
    id: 17,
    name: "BBQ Whole Chicken (1.5 kg)",
    description: "Whole chicken glazed with a smoky BBQ sauce and Naga flavors. Perfect for a flavorful feast.",
    image: "/images/BBQPORK.jpg",
    price: "₹1000 /pack",
    category: "White Meat"
  },
  {
    id: 18,
    name: "Salt & Pepper Chicken",
    description: "Crispy chicken tossed with salt, pepper, and a hint of Naga spices. A simple yet tasty dish.",
    image: "/images/ChickenBBQ.jpg",
    price: "₹250 /pack",
    category: "White Meat"
  },
  {
    id: 19,
    name: "Chicken Sausage",
    description: "Handcrafted chicken sausages with a touch of Naga spices. Great for grilling or breakfast.",
    image: "/images/Chicken_kimbap_.jpg",
    price: "₹180 /pack",
    category: "White Meat"
  },
  {
    id: 20,
    name: "Chilly Chicken",
    description: "Chicken stir-fried with Naga chillies for a spicy kick. Pairs perfectly with rice or noodles.",
    image: "/images/Chicken_kimbap_.jpg",
    price: "₹250 /pack",
    category: "White Meat"
  },
  {
    id: 21,
    name: "Chicken Manchurian",
    description: "Juicy chicken in a tangy Manchurian sauce with Naga aromatics. A fusion favorite for all.",
    image: "/images/Chicken_kimbap_.jpg",
    price: "₹250 /pack",
    category: "White Meat"
  },
  {
    id: 22,
    name: "Crispy Chicken Strips",
    description: "Crunchy chicken strips with a Naga spice coating. Perfect for snacking or as a side dish.",
    image: "/images/Chicken_kimbap_.jpg",
    price: "₹200 /pack",
    category: "White Meat"
  },
  {
    id: 23,
    name: "Mughlai Chicken",
    description: "Tender chicken in a rich Mughlai gravy with a Naga twist. A royal treat for your meals.",
    image: "/images/ChickenBBQ.jpg",
    price: "₹250 /pack",
    category: "White Meat"
  },
  {
    id: 24,
    name: "Tandoori Chicken",
    description: "Classic tandoori chicken marinated with Naga spices for a smoky, spicy flavor. A must-try dish.",
    image: "/images/ChickenBBQ.jpg",
    price: "₹700 /pack",
    category: "White Meat"
  },

  // Sea Food Products
  {
    id: 25,
    name: "Stir Fry Prawns",
    description: "Juicy prawns stir-fried with Naga spices for a bold, flavorful kick. Perfect with rice or as a starter.",
    image: "/images/Tempura_prawns.jpg",
    price: "₹350 /pack",
    category: "Sea Food"
  },
  {
    id: 26,
    name: "Tempura Prawns",
    description: "Crispy prawns in a light tempura batter with a hint of Naga seasoning. A delightful appetizer or snack.",
    image: "/images/Tempura_prawns.jpg",
    price: "₹350 /pack",
    category: "Sea Food"
  },
  {
    id: 27,
    name: "Chilli Garlic Prawns",
    description: "Succulent prawns tossed in a spicy chilli garlic sauce with Naga aromatics. Great for seafood lovers.",
    image: "/images/Tempura_prawns.jpg",
    price: "₹350 /pack",
    category: "Sea Food"
  },
  {
    id: 28,
    name: "Fish Tempura (Basa)",
    description: "Tender basa fish in a crispy tempura batter, lightly seasoned with Naga spices. Perfect for a light meal.",
    image: "/images/fried-fish.jpg",
    price: "₹300 /pack",
    category: "Sea Food"
  },
  {
    id: 29,
    name: "Whole Fish & Chips",
    description: "A classic whole fish fried to perfection with chips, infused with Naga flavors. Ideal for a hearty meal.",
    image: "/images/fried-fish.jpg",
    price: "₹600 /pack",
    category: "Sea Food"
  },
  {
    id: 30,
    name: "Sichuan Shrimp",
    description: "Shrimp cooked in a spicy Sichuan sauce with a Naga twist. A fiery dish to elevate your meal.",
    image: "/images/Tempura_prawns.jpg",
    price: "₹250 /pack",
    category: "Sea Food"
  },
  {
    id: 31,
    name: "Whole Steamed Fish",
    description: "Fresh whole fish steamed with Naga herbs and spices. A healthy and flavorful seafood option.",
    image: "/images/fried-fish.jpg",
    price: "₹600 /pack",
    category: "Sea Food"
  },
  {
    id: 32,
    name: "Fish Nugget Masala (Pankaj Fish)",
    description: "Pankaj fish nuggets coated in a spicy Naga masala blend. Perfect as a snack or side dish.",
    image: "/images/fried-fish.jpg",
    price: "₹250 /pack",
    category: "Sea Food"
  }
];


export default function ProductsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            Authentic <span className="text-primary">Naga Cuisine</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover Chef Salang's ready-to-eat collection of traditional Naga dishes,
            prepared with authentic spices and time-honored recipes
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
                      href={`https://wa.me/+918794854520?text=I'm interested in purchasing ${product.name}`}
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
      <section className="section-padding bg-card" >
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
            href="https://www.instagram.com/salangyanger/?igsh=a3VkMzM4dW1pdHRj#"
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
            href="https://wa.me/+918794854520?text=I'm interested in wholesale opportunities for Chef Salang's products"
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
                src="/detailing.jpg"
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