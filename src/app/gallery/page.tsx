'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Metadata moved to layout or parent component

// Gallery images data
const galleryImages = {
  appetizers: [
    {
      id: "app-1",
      src: "/smoked-pork.jpg",
      alt: "Smoked pork skewers with chili sauce",
      title: "Smoked Pork Skewers"
    },
    {
      id: "app-2",
      src: "/bamboo-shoot.jpg",
      alt: "Bamboo shoot fritters",
      title: "Bamboo Shoot Fritters"
    },
   
    {
      id: "app-3",
      src: "/mushroom-pakora.jpg",
      alt: "Wild mushroom pakoras",
      title: "Wild Mushroom Pakoras"
    },
  ],
  mains: [
    {
      id: "main-1",
      src: "/pork-curry.jpg",
      alt: "Naga pork curry with bamboo shoots",
      title: "Naga Pork Curry"
    },
    {
      id: "main-2",
      src: "/smoked-fish.jpg",
      alt: "Smoked fish with wild herb sauce",
      title: "Smoked Fish"
    },
    {
      id: "main-3",
      src: "/bamboo-shoot-stew.jpg",
      alt: "Bamboo shoot and wild green stew",
      title: "Bamboo Shoot Stew"
    },
    {
      id: "main-4",
      src: "/axone-chicken.jpg",
      alt: "Axone chicken",
      title: "Axone Chicken"
    },
    {
      id: "main-5",
      src: "/fish-curry.jpg",
      alt: "Raja mircha fish curry",
      title: "Raja Mircha Fish Curry"
    },
    {
      id: "main-6",
      src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2893&auto=format&fit=crop",
      alt: "Wild vegetable rice",
      title: "Wild Vegetable Rice"
    },
  ],
  desserts: [
    {
      id: "dessert-1",
      src: "/black-rice-pudding.jpg",
      alt: "Black rice pudding with seasonal fruits",
      title: "Black Rice Pudding"
    },
    {
      id: "dessert-2",
      src: "/pineapple-ginger.jpg",
      alt: "Pineapple and ginger sorbet",
      title: "Pineapple & Ginger Sorbet"
    },
    {
      id: "dessert-3",
      src: "/banana-fritters.jpg",
      alt: "Cardamom infused banana fritters",
      title: "Banana Fritters"
    },
  ]
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const categories = [
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' },
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
      
      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeCategory === category.id
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
