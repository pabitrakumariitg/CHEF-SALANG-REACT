import Image from 'next/image';
import { Check, Users, CalendarDays, Clock, Star } from 'lucide-react';

export const metadata = {
  title: 'Catering Services | Chef Salang Yanger',
  description: 'Chef Salang Yanger offers premium catering services featuring authentic Naga cuisine for weddings, corporate events, private parties and more.',
};

export default function CateringPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/catering-bg.jpg"
            alt="Catering setup with Naga cuisine"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="heading-xl mb-4 text-white">
            <span className="text-primary">Premium</span> Catering Services
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Experience authentic Naga cuisine curated by award-winning Chef Salang Yanger for your special events
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background ">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-8">Elevate Your Events with <span className="text-primary">Authentic Naga Cuisine</span></h2>
          <p className="text-lg text-muted-foreground mb-6">
            Chef Salang offers premium catering services that bring the unique flavors of Nagaland to your special occasions.
            Each menu is thoughtfully crafted using traditional techniques and high-quality ingredients,
            ensuring an unforgettable culinary experience for you and your guests.
          </p>
          <p className="text-lg text-muted-foreground">
            Whether you're hosting an intimate gathering, a corporate function, or a grand celebration,
            Chef Salang's catering service adapts to your needs while maintaining the authentic essence of Naga cuisine.
          </p>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Events We <span className="text-primary">Cater</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wedding */}
            <div
              className="p-8 rounded-lg card-hover relative text-white overflow-hidden"
              style={{
                backgroundImage: "url('/weeding.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-lg" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Weddings</h3>
                <p className="text-muted-foreground mb-6">
                  Create memorable wedding feasts featuring customized Naga cuisine menus that blend
                  tradition with contemporary presentation for your special day.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Customized wedding menus</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Interactive food stations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Reception dinner service</span>
                  </li>
                </ul>
              </div>
            </div>


            <div
              className="p-8 rounded-lg card-hover relative text-white overflow-hidden"
              style={{
                backgroundImage: "url('/corporate.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-lg" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mb-6">
                  <CalendarDays className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Corporate Events</h3>
                <p className="text-muted-foreground mb-6">
                  Impress clients and colleagues with unique Naga cuisine offerings perfect for
                  conferences, team-building events, and business functions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Business luncheons</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Conference catering packages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Product launch events</span>
                  </li>
                </ul>
              </div>
            </div>


            <div
              className="p-8 rounded-lg card-hover relative text-white overflow-hidden"
              style={{
                backgroundImage: "url('/private-gatherings.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-lg" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Private Parties</h3>
                <p className="text-muted-foreground mb-6">
                  Host unforgettable dinner parties and celebrations with personalized menus
                  that showcase the finest flavors of Nagaland in your home or venue of choice.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Birthday celebrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Anniversary dinners</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Intimate gatherings</span>
                  </li>
                </ul>
              </div>
            </div>


            {/* Cultural Festivals */}
            <div
              className="p-8 rounded-lg card-hover relative text-white overflow-hidden"
              style={{
                backgroundImage: "url('/cultural-gatherings.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-lg" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Cultural Festivals</h3>
                <p className="text-muted-foreground mb-6">
                  Bring authentic Naga flavors to cultural events and festivals with
                  specialized menus that celebrate tradition and heritage.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Traditional festival menus</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Live cooking demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Cultural food exhibitions</span>
                  </li>
                </ul>
              </div>
            </div>


            {/* Pop-Up Dining */}
            <div
              className="p-8 rounded-lg card-hover relative text-white overflow-hidden"
              style={{
                backgroundImage: "url('/pop-up-dinning.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-lg" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Pop-Up Dining</h3>
                <p className="text-muted-foreground mb-6">
                  Experience Chef Salang's exclusive pop-up dining events featuring
                  curated tasting menus that showcase seasonal Naga ingredients.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Seasonal tasting menus</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Chef's table experiences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Collaborative dining events</span>
                  </li>
                </ul>
              </div>
            </div>


            {/* Educational Workshops */}
            <div
              className="p-8 rounded-lg card-hover relative text-white overflow-hidden"
              style={{
                backgroundImage: "url('/culinary-workshops.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-lg" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mb-6">
                  <CalendarDays className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Culinary Workshops</h3>
                <p className="text-muted-foreground mb-6">
                  Learn the art of Naga cooking through interactive workshops and
                  demonstrations led by Chef Salang himself.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Cooking classes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Ingredient sourcing education</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <span>Technique demonstrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Menu Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-6">Sample <span className="text-primary">Menu</span></h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Our menus are customizable to suit your event requirements, dietary preferences, and desired level of spice.
            Here's a sample of what Chef Salang can create for your special occasion.
          </p>

          <div className="bg-card rounded-lg p-8 md:p-12">
            {/* Appetizers */}
            <div className="mb-12">
              <h3 className="text-xl text-secondary font-medium mb-6">APPETIZERS</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Smoked Pork Skewers</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Tender smoked pork marinated in fermented bamboo shoot, served with house-made chili sauce
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Wild Forest Mushroom Pakora</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Crispy fritters made with locally foraged mushrooms and aromatic herbs
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Axone Hummus</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Traditional fermented soybean paste blended with sesame oil and herbs, served with crispy rice crackers
                  </p>
                </div>
              </div>
            </div>

            {/* Main Courses */}
            <div className="mb-12">
              <h3 className="text-xl text-secondary font-medium mb-6">MAIN COURSES</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Slow-Cooked Naga Pork Curry</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Tender pork simmered with raja mircha (ghost chili), bamboo shoots, and indigenous herbs
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Smoked Fish with Wild Herb Sauce</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Local freshwater fish smoked over hardwood, served with a sauce of foraged herbs and fermented fish
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Bamboo Shoot and Wild Green Stew</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Fresh and fermented bamboo shoots cooked with seasonal wild greens and indigenous spices (Vegetarian)
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Axone Chicken</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Free-range chicken cooked with fermented soybean paste and traditional Naga spices
                  </p>
                </div>
              </div>
            </div>

            {/* Sides */}
            <div className="mb-12">
              <h3 className="text-xl text-secondary font-medium mb-6">SIDES & ACCOMPANIMENTS</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Sticky Rice</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Traditional mountain rice steamed to perfection
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Naga Dal</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Yellow lentils tempered with ginger, garlic, and local herbs
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Wild Vegetable Medley</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Seasonal forest vegetables sautéed with minimal spices to highlight their natural flavors
                  </p>
                </div>
              </div>
            </div>

            {/* Desserts */}
            <div>
              <h3 className="text-xl text-secondary font-medium mb-6">DESSERTS</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Black Rice Pudding</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Slow-cooked black rice with coconut milk and palm jaggery, topped with seasonal fruits
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Pineapple & Ginger Sorbet</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Refreshing sorbet made with locally grown pineapples and wild ginger
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Cardamom Infused Banana Fritters</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Crispy banana fritters with a hint of cardamom, served with honey glaze
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Process */}
      <section className="section-padding bg-card" style={{
        backgroundImage: "url('/catering-process.jpg')", backgroundSize: "cover",
        backgroundPosition: "center",
        opacity:0.7
      }}>
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Our Catering <span className="text-primary">Process</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-background rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Consultation</h3>
                <p className="text-muted-foreground">
                  We begin with a detailed discussion about your event, preferences, dietary requirements, and vision.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 h-1 w-12 bg-primary transform translate-x-6"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-background rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Menu Creation</h3>
                <p className="text-muted-foreground">
                  Chef Salang personally designs a customized menu based on your requirements and seasonal availability.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 h-1 w-12 bg-primary transform translate-x-6"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-background rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Tasting Session</h3>
                <p className="text-muted-foreground">
                  Experience a sample of your selected dishes to ensure they meet your expectations before finalizing.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-0 h-1 w-12 bg-primary transform translate-x-6"></div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-background rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg mb-6">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-4">Execution</h3>
                <p className="text-muted-foreground">
                  Chef Salang and his team handle all aspects of food preparation ensuring a seamless experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Book Chef Salang for Your Event?
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and check availability.
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M9 14a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
            </svg>
            Book via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}