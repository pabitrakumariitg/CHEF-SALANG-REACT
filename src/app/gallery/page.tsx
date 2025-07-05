"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Metadata moved to layout or parent component

// Gallery images data
const galleryImages = {
  appetizers: [
    {
      id: "app-1",
      src: "/images/Sushi.jpg",
      alt: "Japanese sushi rolls",
      title: "Sushi",
    },
    {
      id: "app-2",
      src: "/images/Salmon_sushi.jpg",
      alt: "Fresh salmon sushi",
      title: "Salmon Sushi",
    },
    {
      id: "app-3",
      src: "/images/Bacon_Roll.jpg",
      alt: "Crispy bacon rolls with dipping sauce",
      title: "Bacon Roll",
    },
    {
      id: "app-4",
      src: "/images/Chicken_kimbap_.jpg",
      alt: "Korean-style chicken kimbap rolls",
      title: "Chicken Kimbap",
    },
    {
      id: "app-5",
      src: "/images/Tempura_prawns.jpg",
      alt: "Japanese tempura prawns with dipping sauce",
      title: "Tempura Prawns",
    },
    {
      id: "app-6",
      src: "/images/Rose_dumplings_.jpg",
      alt: "Artistic rose-shaped dumplings",
      title: "Rose Dumplings",
    },
  ],
  mains: [
    {
      id: "main-1",
      src: "/images/PorkRoast.jpg",
      alt: "Roasted pork with herbs and vegetables",
      title: "Pork Roast",
    },
    {
      id: "main-2",
      src: "/images/fried-fish.jpg",
      alt: "Whole fried fish with crispy skin",
      title: "Crispy Fried Whole Fish",
    },
    {
      id: "main-3",
      src: "/images/BBQPORK.jpg",
      alt: "Grilled BBQ pork with smoky glaze",
      title: "Barbeque Pork",
    },
    {
      id: "main-4",
      src: "/images/ChickenBBQ.jpg",
      alt: "Grilled barbeque chicken",
      title: "Barbeque Chicken",
    },
    {
      id: "main-5",
      src: "/images/Chicken_&_Fish_Roast.jpg",
      alt: "Roasted chicken and fish combo",
      title: "Chicken & Fish Roast",
    },
    {
      id: "main-6",
      src: "/images/Chicken_Roast.jpg",
      alt: "Whole roasted chicken with golden skin",
      title: "Chicken Roast",
    },
    {
      id: "main-7",
      src: "/images/Crispypork.jpg",
      alt: "Crispy fried pork slices",
      title: "Crispy Pork",
    },
    {
      id: "main-8",
      src: "/images/SpicyBeefLiver.png",
      alt: "Spicy Beef Liver Roast",
      title: "Spicy Beef Liver ",
    },
  ],
  fruit_carvings: [
    {
      id: "carv-1",
      src: "/images/IMG_3197.jpg",
      alt: "Intricate lotus pattern carved into a green melon",
      title: "Green Melon Lotus Carving",
    },
    {
      id: "carv-2",
      src: "/images/IMG_3193.jpg",
      alt: "Detailed flower carving with red-tipped petals and green leaves on a white melon",
      title: "Floral Melon Bloom",
    },
    {
      id: "carv-3",
      src: "/images/fruit_carving_3.jpg",
      alt: "A decorative arrangement of pink roses and carved fruits, perfect for a festive outdoor event.",
      title: "Floral & Fruit Display",
    },
    {
      id: "carv-4",
      src: "/images/IMG_2903.png",
      alt: "Three intricately carved watermelons showcasing geometric floral patterns, displayed on a table in an outdoor setting.",
      title: "Geometric Watermelon Carvings",
    },
    {
      id: "carv-5",
      src: "/images/IMG_2904.png",
      alt: "A beautifully carved watermelon with a central star design, accompanied by two dragon-shaped carvings made from carrots, displayed indoors near a shelf of products.",
      title: "Watermelon and Dragon Carrot Sculpture",
    },
    {
      id: "carv-6",
      src: "/images/Rosecarving.jpg",
      alt: "A plate full of delicately carved rose-shaped flowers made from beets and carrots, arranged in an alternating color pattern.",
      title: "Rose Carvings from Beets & Carrots",
    },
  ],
  food_hampers: [
    {
      id: "hamp-1",
      src: "/images/Foodhamper.jpg",
      alt: "Gourmet food hamper with smoked sausages, shrimps, roasted potatoes, and salad",
      title: "Gourmet Meat & Shrimp Hamper",
    },
    {
      id: "hamp-2",
      src: "/images/Food hampers.png",
      alt: "Platter of grilled sausages and prawns served on a bed of lettuce",
      title: "Grilled Sausage & Prawn Platter",
    },
    {
      id: "hamp-3",
      src: "/images/Food_hamper.jpg",
      alt: "Whole fried fish with potato wedges and lemon slices",
      title: "Crispy Fried Fish with Wedges",
    },
  ],
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("appetizers");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "appetizers", label: "Appetizers" },
    { id: "mains", label: "Main Courses" },
    { id: "fruit_carvings", label: "Fruit Carvings" },
    { id: "food_hampers", label: "Food Hampers" },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=2940&auto=format&fit=crop"
            alt="Gallery background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="heading-xl mb-6 text-white">
            Food <span className="text-primary">Gallery</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-200">
            A visual feast of authentic Naga cuisine crafted with passion and
            expertise by Chef Salang Yanger
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-md px-6 py-3 font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-card hover:bg-primary hover:bg-opacity-10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages[activeCategory].map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="card-hover relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity hover:opacity-90" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-medium text-white">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-h-[80vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-medium text-white">
                  {selectedImage.title}
                </h3>
                <p className="mt-2 text-gray-300">{selectedImage.alt}</p>
              </div>
              <button
                className="absolute right-0 top-0 -mr-12 -mt-12 rounded-full bg-primary p-2 text-white"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <blockquote className="mx-auto max-w-4xl text-2xl font-light italic text-white md:text-3xl lg:text-4xl">
            "Food is not just eating energy. It's an experience."
          </blockquote>
          <p className="mt-6 text-xl text-white">— Chef Salang Yanger</p>
        </div>
      </section>
    </div>
  );
}
