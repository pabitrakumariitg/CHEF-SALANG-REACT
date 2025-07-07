import Image from "next/image";
import { ArrowRight, Instagram } from "lucide-react";

export const metadata = {
  title: "Products | Chef Salang Yanger",
  description:
    "Explore Chef Salang's exclusive line of authentic Naga food products including specialty sausages, fermented goods, and artisanal condiments.",
};

const products = [
  // Red Meat Products
  {
    id: 1,
    name: "Crispy Pork",
    description:
      "Succulent pork fried to crispy perfection with a Naga spice twist. Ideal for snacking or pairing with rice.",
    image: "/images/Crispypork.jpg",
    price: "₹250 /pack",
    category: "Red Meat",
  },
  {
    id: 2,
    name: "Crispy Pork Belly",
    description:
      "Premium pork belly fried to golden perfection with authentic Naga seasonings. A rich and flavorful delicacy.",
    image: "/images/Crispy_pork_belly.jpg",
    price: "₹280 /pack",
    category: "Red Meat",
  },
  {
    id: 3,
    name: "BBQ Pork",
    description:
      "Juicy pork glazed with a smoky BBQ sauce infused with Naga herbs. Great for grilling or as a hearty side.",
    image: "/images/BBQPORK.jpg",
    price: "₹400 /pack",
    category: "Red Meat",
  },
  {
    id: 4,
    name: "Pork Roast",
    description:
      "Tender pork roasted with traditional Naga spices and herbs. Perfect for special occasions and family dinners.",
    image: "/images/PorkRoast.jpg",
    price: "₹350 /pack",
    category: "Red Meat",
  },
  {
    id: 5,
    name: "Pork in Black Bean",
    description:
      "Tender pork cooked in a rich black bean sauce with Naga aromatics. A savory delight for any dish.",
    image: "/images/Crispy pork 2.JPG",
    price: "₹220 /pack",
    category: "Red Meat",
  },
  {
    id: 6,
    name: "Beef Chilli Pot",
    description:
      "Spicy beef slow-cooked with Naga chillies in a rich pot. A bold dish to spice up your meals.",
    image: "/images/SpicyBeefLiver.png",
    price: "₹250 /pack",
    category: "Red Meat",
  },
  {
    id: 7,
    name: "Beef Masala",
    description:
      "Succulent beef simmered in a fragrant Naga masala blend. Pairs wonderfully with rice or flatbreads.",
    image: "/images/SpicyBeefLiver.png",
    price: "₹220 /pack",
    category: "Red Meat",
  },
  {
    id: 8,
    name: "Mutton Masala",
    description:
      "Flavorful mutton in a spicy Naga masala mix. A hearty addition to your traditional meals.",
    image: "/images/BBQPORK.jpg",
    price: "₹350 /pack",
    category: "Red Meat",
  },

  // White Meat Products
  {
    id: 9,
    name: "Lang Lang Chicken",
    description:
      "A Naga-style chicken dish packed with bold flavors and local spices. Perfect for a hearty family meal.",
    image: "/images/Lang-CHICKEN.jpg",
    price: "₹1500 /pack",
    category: "White Meat",
  },
  {
    id: 10,
    name: "Spicy Wings (Raja Spicy)",
    description:
      "Juicy chicken wings coated in a fiery Raja Spicy Naga blend. Great for snacking or parties.",
    image: "/images/ChickenBBQ.jpg",
    price: "₹220 /pack",
    category: "White Meat",
  },
  {
    id: 11,
    name: "Spicy Chicken (Raja Spicy)",
    description:
      "Tender chicken infused with Raja Spicy seasoning. A bold dish to spice up your table.",
    image: "/catering/image06.jpg",
    price: "₹250 /pack",
    category: "White Meat",
  },
  {
    id: 12,
    name: "Whole Chicken Roast (2 kg)",
    description:
      "Succulent whole chicken roasted with Naga herbs and spices. Ideal for festive gatherings.",
    image: "/images/Chicken_Roast.jpg",
    price: "₹1200 /pack",
    category: "White Meat",
  },
  {
    id: 13,
    name: "BBQ Whole Chicken (1.5 kg)",
    description:
      "Whole chicken glazed with a smoky BBQ sauce and Naga flavors. Perfect for a flavorful feast.",
    image: "/images/ChickenBBQ.jpg",
    price: "₹1000 /pack",
    category: "White Meat",
  },
  {
    id: 14,
    name: "Salt & Pepper Chicken",
    description:
      "Crispy chicken tossed with salt, pepper, and a hint of Naga spices. A simple yet tasty dish.",
    image: "/images/ChickenBBQ.jpg",
    price: "₹250 /pack",
    category: "White Meat",
  },
  {
    id: 15,
    name: " Chicken Kimbap",
    description:"Korean-style rice rolls filled with seasoned chicken and vegetables, wrapped in seaweed with a Naga spice twist.",
    image: "/images/Chicken_kimbap_.jpg",
    price: "₹250 /pack",
    category: "White Meat",
  },
  // {
  //   id: 16,
  //   name: "Chicken Manchurian",
  //   description: "Juicy chicken in a tangy Manchurian sauce with Naga aromatics. A fusion favorite for all.",
  //   image: "/images/Chicken_kimbap_.jpg",
  //   price: "₹250 /pack",
  //   category: "White Meat"
  // },
  // {
  //   id: 17,
  //   name: "Crispy Chicken Strips",
  //   description: "Crunchy chicken strips with a Naga spice coating. Perfect for snacking or as a side dish.",
  //   image: "/images/Chicken_kimbap_.jpg",
  //   price: "₹200 /pack",
  //   category: "White Meat"
  // },
  {
    id: 18,
    name: "Mughlai Chicken",
    description:
      "Tender chicken in a rich Mughlai gravy with a Naga twist. A royal treat for your meals.",
    image: "/images/Chicken_Roast.jpg",
    price: "₹250 /pack",
    category: "White Meat",
  },
  {
    id: 19,
    name: "Tandoori Chicken",
    description:
      "Classic tandoori chicken marinated with Naga spices for a smoky, spicy flavor. A must-try dish.",
    image: "/images/ChickenBBQ.jpg",
    price: "₹700 /pack",
    category: "White Meat",
  },
  {
    id: 20,
    name: "Chicken & Fish Roast",
    description:
      "A delicious combination of roasted chicken and fish with traditional Naga spices.",
    image: "/images/Chicken_&_Fish_Roast.jpg",
    price: "₹450 /pack",
    category: "White Meat",
  },

  // Sea Food Products
  {
    id: 21,
    name: "Stir Fry Prawns",
    description:
      "Juicy prawns stir-fried with Naga spices for a bold, flavorful kick. Perfect with rice or as a starter.",
    image: "/images/Tempura_prawns.jpg",
    price: "₹350 /pack",
    category: "Sea Food",
  },
  {
    id: 22,
    name: "Tempura Prawns",
    description:
      "Crispy prawns in a light tempura batter with a hint of Naga seasoning. A delightful appetizer or snack.",
    image: "/catering/image03.jpg",
    price: "₹350 /pack",
    category: "Sea Food",
  },
  {
    id: 23,
    name: "Chilli Garlic Prawns",
    description:
      "Succulent prawns tossed in a spicy chilli garlic sauce with Naga aromatics. Great for seafood lovers.",
    image: "/images/Tempura_prawns.jpg",
    price: "₹350 /pack",
    category: "Sea Food",
  },
  {
    id: 24,
    name: "Fish Tempura (Basa)",
    description:
      "Tender basa fish in a crispy tempura batter, lightly seasoned with Naga spices. Perfect for a light meal.",
    image: "/images/fried-fish.jpg",
    price: "₹300 /pack",
    category: "Sea Food",
  },
  {
    id: 25,
    name: "Whole Fish & Chips",
    description:
      "A classic whole fish fried to perfection with chips, infused with Naga flavors. Ideal for a hearty meal.",
    image: "/images/fried-fish.jpg",
    price: "₹600 /pack",
    category: "Sea Food",
  },
  {
    id: 26,
    name: "Sichuan Shrimp",
    description:
      "Shrimp cooked in a spicy Sichuan sauce with a Naga twist. A fiery dish to elevate your meal.",
    image: "/images/Tempura_prawns.jpg",
    price: "₹250 /pack",
    category: "Sea Food",
  },
  {
    id: 27,
    name: "Whole Steamed Fish",
    description:
      "Fresh whole fish steamed with Naga herbs and spices. A healthy and flavorful seafood option.",
    image: "/images/fried-fish.jpg",
    price: "₹600 /pack",
    category: "Sea Food",
  },
  {
    id: 28,
    name: "Fish Nugget Masala (Pankaj Fish)",
    description:
      "Pankaj fish nuggets coated in a spicy Naga masala blend. Perfect as a snack or side dish.",
    image: "/images/fried-fish.jpg",
    price: "₹250 /pack",
    category: "Sea Food",
  },
  {
    id: 29,
    name: "Salmon Sushi",
    description:
      "Fresh salmon sushi with a Naga-inspired twist. A fusion of Japanese technique and local flavors.",
    image: "/images/Salmon_sushi.jpg",
    price: "₹400 /pack",
    category: "Sea Food",
  },
  {
    id: 30,
    name: "Sushi Platter",
    description:
      "An assorted sushi platter featuring various fish and seafood with traditional and Naga-style preparations.",
    image: "/images/Sushi.jpg",
    price: "₹500 /pack",
    category: "Sea Food",
  },

  // Specialty Items & Hampers
  {
    id: 31,
    name: "BBQ Hamper",
    description:
      "A complete BBQ hamper with assorted meats and sides, perfect for outdoor gatherings.",
    image: "/images/BBQ_hamper.jpg",
    price: "₹800 /pack",
    category: "Hampers",
  },
  {
    id: 32,
    name: "Food Hamper",
    description:
      "A delicious assortment of ready-to-eat Naga specialties in a convenient hamper.",
    image: "/images/Food_hamper.jpg",
    price: "₹600 /pack",
    category: "Hampers",
  },
  {
    id: 33,
    name: "Fish n' Chips Hamper",
    description:
      "Classic fish and chips combination with Naga spices, perfect for a complete meal.",
    image: "/images/Fish_n_chips_hamper.jpg",
    price: "₹500 /pack",
    category: "Hampers",
  },
  {
    id: 34,
    name: "Snack Box",
    description:
      "A variety of Naga-style snacks and appetizers perfect for sharing or personal enjoyment.",
    image: "/images/Snack Box.jpg",
    price: "₹300 /pack",
    category: "Snacks",
  },
  {
    id: 35,
    name: "Bacon Roll",
    description:
      "Crispy bacon wrapped in a soft roll with Naga seasonings. Perfect for breakfast or snacking.",
    image: "/images/Bacon_Roll.jpg",
    price: "₹150 /pack",
    category: "Snacks",
  },
  {
    id: 36,
    name: "Rose Dumplings",
    description:
      "Delicate dumplings shaped like roses, filled with flavorful meat and Naga spices.",
    image: "/images/Rose_dumplings_.jpg",
    price: "₹280 /pack",
    category: "Specialty",
  },
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
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Discover Chef Salang's ready-to-eat collection of traditional Naga
            dishes, prepared with authentic spices and time-honored recipes
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="card-hover overflow-hidden rounded-lg bg-card"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
                  <p className="mb-4 text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">{product.price}</span>
                    <a
                      href={`https://wa.me/+918798769559?text=I'm interested in purchasing ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-primary px-4 py-2 text-white transition-all hover:bg-primary hover:bg-opacity-80"
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
          <div className="mb-6 flex items-center justify-center">
            <Instagram className="mr-3 h-8 w-8 text-primary" />
            <h2 className="heading-lg">Shop on Instagram</h2>
          </div>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            Follow Chef Salang on Instagram to browse and shop our complete
            product collection. Direct message us for orders and inquiries.
          </p>
          <a
            href="https://www.instagram.com/salangyanger/?igsh=a3VkMzM4dW1pdHRj#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Visit Our Instagram Shop
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Wholesale Inquiry */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-white">
            Interested in Wholesale?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white opacity-90">
            Chef Salang's products are available for wholesale purchase for
            restaurants, specialty stores, and retailers.
          </p>
          <a
            href="https://wa.me/+918798769559?text=I'm interested in wholesale opportunities for Chef Salang's products"
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
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/detailing.jpg"
                alt="Chef Salang preparing products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className="heading-lg mb-6">
                Our Product <span className="text-primary">Philosophy</span>
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Every product in Chef Salang's collection is made with the same
                care and attention to detail that characterizes his cooking. We
                source ingredients locally from trusted farmers and producers in
                Nagaland to ensure authenticity and support local communities.
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                Our production methods honor traditional techniques passed down
                through generations, while incorporating modern food safety
                standards. Each batch is personally approved by Chef Salang to
                maintain quality and consistency.
              </p>
              <p className="text-lg text-muted-foreground">
                From our kitchen to your table, these products offer a taste of
                authentic Naga cuisine and culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
