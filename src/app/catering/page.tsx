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
            <span className="text-secondary">Authentic Flavours. Professional Service. Unforgettable Experiences.</span>
            <br />

            Whether it’s an intimate family gathering or a large-scale corporate event, Chef Salang, through Aromatic Fusion brings the rich, soulful taste of Nagaland and beyond to your table with precision and passion.
          </p>

        </div>
      </section>

      {/* Event Types Section */}

      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">
            Events We <span className="text-primary">Cater</span>
          </h2>

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
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-lg" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Event Catering</h3>
                <p className="text-muted-foreground mb-6">
                  From weddings and birthdays to anniversaries and festive celebrations, we curate menus that make your special moments even more memorable.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Wedding celebrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Birthday parties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Anniversary dinners</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Corporate */}
            <div
              className="p-8 rounded-lg card-hover relative text-white overflow-hidden"
              style={{
                backgroundImage: "url('/corporate.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-lg" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mb-6">
                  <CalendarDays className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Corporate Catering</h3>
                <p className="text-muted-foreground mb-6">
                  Perfect for office meetings, conferences, product launches, and staff events. Energize your team with hearty meals that inspire.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Office meetings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Conference events</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Staff team events</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Off-Premise */}
            <div
              className="p-8 rounded-lg card-hover relative text-white overflow-hidden"
              style={{
                backgroundImage: "url('/private-gatherings.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-lg" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Off-Premise Catering</h3>
                <p className="text-muted-foreground mb-6">
                  Food is prepared in our state-of-the-art kitchen and delivered to your location—hot, hygienic, and on time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Kitchen-prepared delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Hot & hygienic transport</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>On-time delivery service</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Institutional */}
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
                <h3 className="text-2xl font-semibold mb-4">Institutional Catering</h3>
                <p className="text-muted-foreground mb-6">
                  Dependable, nutritious, and delicious meals for schools, hospitals, colleges, and government organizations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>School meal programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Hospital nutrition services</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Government facility catering</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* On-Premise */}
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
                <h3 className="text-2xl font-semibold mb-4">On-Premise Catering</h3>
                <p className="text-muted-foreground mb-6">
                  Let our team cook and serve fresh, hot meals right at your venue. Live counters and direct service available.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Live cooking at venue</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Fresh hot meal service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Interactive food counters</span>
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
          <h2 className="heading-lg text-center mb-6">Signature Catering <span className="text-primary">Menu</span></h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A fusion of indigenous Naga cuisine and pan-Asian classics. All dishes are made with premium ingredients,
            locally sourced wherever possible. Our menus are customizable to suit your event requirements and dietary preferences.
          </p>

          <div className="bg-card rounded-lg p-8 md:p-12">
            {/* Non-Veg Delights */}
            <div className="mb-12">
              <h3 className="text-xl text-secondary font-medium mb-6">NON-VEG DELIGHTS</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Pork</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Naga Style – Traditional preparation with fermented bamboo shoots and indigenous spices | Chinese – Stir-fried with ginger and soy
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Chicken</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Naga Style – Cooked with axone (fermented soybean) and local herbs | Chinese – Wok-tossed with garlic and oriental flavors
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Beef</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Indian Style – Rich curry with aromatic spices | Chinese – Tender beef strips in savory sauce
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Prawns</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Chilli Garlic – Spicy prawns with garlic and red chilies | Stir-Fry – Quick-cooked with vegetables and Asian seasonings
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Mutton</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Indian Style – Slow-cooked mutton curry with traditional spices and herbs
                  </p>
                </div>
              </div>
            </div>

            {/* Popular Combos */}
            <div className="mb-12">
              <h3 className="text-xl text-secondary font-medium mb-6">POPULAR COMBOS</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Any 2 Non-Veg Combo</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Perfect pairing of Pork + Chicken or choose any two non-veg dishes for a satisfying meal
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Any 3 Non-Veg Combo</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Ultimate feast with Pork + Chicken + Fish or any three non-veg selections for larger gatherings
                  </p>
                </div>
              </div>
            </div>

            {/* Accompaniments */}
            <div className="mb-12">
              <h3 className="text-xl text-secondary font-medium mb-6">ACCOMPANIMENTS</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Steamed Rice</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Perfectly steamed jasmine rice, the ideal base for our flavorful dishes
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Dal</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Fry – Crispy tempered lentils with spices | Tadka – Traditional dal with aromatic seasoning
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Salad or Seasonal Boil</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Fresh garden salad or seasonal boiled vegetables to complement your meal
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Chutney</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Traditional chutneys with or without King Chilli (Ghost Pepper) for the adventurous palate
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Papad</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Crispy lentil wafers, a perfect crunchy addition to every meal
                  </p>
                </div>
              </div>
            </div>

            {/* Complimentary Items */}
            <div>
              <h3 className="text-xl text-secondary font-medium mb-6">COMPLIMENTARY SEASONAL ITEMS</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium">Seasonal Specialties</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Enjoy complimentary seasonal items that showcase the best of local produce and traditional preparations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Why Choose <span className="text-primary">Us?</span>

          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto">
            Authentic recipes with a modern touch
            Customizable menus for all budgets
            Hygiene, punctuality, and service excellence
            Chef-led team with years of experience
            Serving across Nagaland and nearby regions
          </p>

        </div>
      </section>

      {/* Catering Process */}
      <section className="section-padding bg-card" style={{
        backgroundImage: "url('/catering-process.jpg')", backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9
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
          Bring Chef Salang’s signature flavors to your next event.
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and check availability.
          </p>
          <a
            href="https://wa.me/+918798769559"
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
            Check Availability
          </a>
        </div>
      </section>
    </div>
  );
}