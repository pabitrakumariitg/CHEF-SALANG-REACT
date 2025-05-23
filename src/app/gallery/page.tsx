'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Metadata moved to layout or parent component

// Gallery images data
const galleryImages = {
  appetizers: [
    {
      id: "app-1",
      src: "/images/Sushi.jpg",
      alt: "Japanese sushi rolls",
      title: "Sushi"
    },
    {
      id: "app-2",
      src: "/images/Salmon_sushi.jpg",
      alt: "Fresh salmon sushi",
      title: "Salmon Sushi"
    },
    {
      id: "app-3",
      src: "/images/Bacon_Roll.jpg",
      alt: "Crispy bacon rolls with dipping sauce",
      title: "Bacon Roll"
    },
    {
      id: "app-4",
      src: "/images/Chicken_kimbap_.jpg",
      alt: "Korean-style chicken kimbap rolls",
      title: "Chicken Kimbap"
    },
    {
      id: "app-5",
      src: "/images/Tempura_prawns.jpg",
      alt: "Japanese tempura prawns with dipping sauce",
      title: "Tempura Prawns"
    },
    {
      id: "app-6",
      src: "/images/Rose_dumplings_.jpg",
      alt: "Artistic rose-shaped dumplings",
      title: "Rose Dumplings"
    }
  ],
  mains: [
    {
      id: "main-1",
      src: "/images/Pork_roast.jpg",
      alt: "Roasted pork with herbs and vegetables",
      title: "Pork Roast"
    },
    {
      id: "main-2",
      src: "/images/fried-fish.jpg",
      alt: "Whole fried fish with crispy skin",
      title: "Crispy Fried Whole Fish"
    },
    {
      id: "main-3",
      src: "/images/BBQ PORK.jpg",
      alt: "Grilled BBQ pork with smoky glaze",
      title: "Barbeque Pork"
    },
    {
      id: "main-4",
      src: "/images/Chicken BBQ .jpg",
      alt: "Grilled barbeque chicken",
      title: "Barbeque Chicken"
    },
    {
      id: "main-5",
      src: "/images/Chicken_&_Fish_Roast.jpg",
      alt: "Roasted chicken and fish combo",
      title: "Chicken & Fish Roast"
    },
    {
      id: "main-6",
      src: "/images/Chicken_Roast.jpg",
      alt: "Whole roasted chicken with golden skin",
      title: "Chicken Roast"
    },
    {
      id: "main-7",
      src: "/images/Crispy pork.jpg",
      alt: "Crispy fried pork slices",
      title: "Crispy Pork"
    },
    {
      id: "main-8",
      src: "/images/SpicyBeefLiver.png",
      alt: "Spicy Beef Liver Roast",
      title: "Spicy Beef Liver "
    }
  ], fruit_carvings: [
    {
      id: "carv-1",
      src: "/images/IMG_3197.jpg",
      alt: "Intricate lotus pattern carved into a green melon",
      title: "Green Melon Lotus Carving"
    },
    {
      id: "carv-2",
      src: "/images/IMG_3193.jpg",
      alt: "Detailed flower carving with red-tipped petals and green leaves on a white melon",
      title: "Floral Melon Bloom"
    }
  ]
  , food_hampers: [
    {
      id: "hamp-1",
      src: "/images/Food hamper.jpg",
      alt: "Gourmet food hamper with smoked sausages, shrimps, roasted potatoes, and salad",
      title: "Gourmet Meat & Shrimp Hamper"
    },
    {
      id: "hamp-2",
      src: "/images/Food hampers.png",
      alt: "Platter of grilled sausages and prawns served on a bed of lettuce",
      title: "Grilled Sausage & Prawn Platter"
    },
    {
      id: "hamp-3",
      src: "/images/Food_hamper.jpg",
      alt: "Whole fried fish with potato wedges and lemon slices",
      title: "Crispy Fried Fish with Wedges"
    }


  ]
};


export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'fruit_carvings', label: 'Fruit Carvings' },
    { id: 'food_hampers', label: 'Food Hampers' },
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
        <div className="container-custom text-center relative z-10">
          <h1 className="heading-xl mb-6 text-white">
            Food <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A visual feast of authentic Naga cuisine crafted with passion and expertise by Chef Salang Yanger
          </p>
        </div>
      </section>
      {/* Signature Dish */}
      <section className="section-padding bg-card">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden card-hover">
            <Image
              src="/images/Lang Lang chicken during Naga Chef.jpg"
              alt="Lang Lang Chicken prepared by Chef Salang Yanger"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h1 className="text-40xl heading-lg  ">
              <span className="text-primary">Lang Lang </span>Chicken
            </h1>
            <p className="  italic font-[cursive] text-secondary text-center text-muted-foreground">
              - Signature Dish Of Chef Salang Yanger
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              A bold reinterpretation of a traditional Naga delicacy, Chef Salang Yanger's <strong>Lang Lang Chicken</strong> combines smoky flavors of indigenous spices, bamboo shoot, and fresh herbs with a slow-roasted preparation method that highlights the earthy depth of Naga cuisine.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              This signature dish, which earned acclaim during his championship run in <strong>Naga Chef Season 3</strong>, is a celebration of cultural authenticity and modern presentation. It brings together the community’s culinary wisdom with Chef Salang’s flair for innovation.
            </p>
            <p className="text-lg text-muted-foreground">
              Often served with fermented soybean chutney and sticky rice, Lang Lang Chicken is not just a dish—it’s an experience that connects tradition with today’s gourmet expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-card hover:bg-primary hover:bg-opacity-10'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages[activeCategory].map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer card-hover"
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
                  <h3 className="text-white text-xl font-medium">{image.title}</h3>
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
              className="relative max-w-4xl max-h-[80vh] w-full"
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
                <h3 className="text-white text-2xl font-medium">{selectedImage.title}</h3>
                <p className="text-gray-300 mt-2">{selectedImage.alt}</p>
              </div>
              <button
                className="absolute top-0 right-0 -mt-12 -mr-12 p-2 rounded-full bg-primary text-white"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-light italic max-w-4xl mx-auto">
            "Food is not just eating energy. It's an experience."
          </blockquote>
          <p className="mt-6 text-white text-xl">— Chef Salang Yanger</p>
        </div>
      </section>
    </div>
  );
}
