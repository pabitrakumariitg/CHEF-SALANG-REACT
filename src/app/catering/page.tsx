import Image from "next/image";
import { Check, Users, CalendarDays, Clock, Star } from "lucide-react";

export const metadata = {
  title: "Catering Services | Chef Salang Yanger",
  description:
    "Chef Salang Yanger offers premium catering services featuring authentic Naga cuisine for weddings, corporate events, private parties and more.",
};
const titles = [
  "Chicken Salt and Pepper",
  "Green Salad",
  "Butter Garlic Prawn",
  "Red Chutney",
  "Crispy Pork",
  "Pork in Babooshoot",
  "Chilli Garkic Pork",
  "Smoked beef in Nuoshi",
  "Naga Beans",
  "Rosup",
  "",
  "",
];

// Simple BlurFade component (you can replace this with your actual component later)
const BlurFade = ({ children, delay = 0, inView = true, className = "" }) => {
  return (
    <div
      className={`transition-all duration-700 ease-out ${inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// BlurFade Demo Component
const images = Array.from({ length: 12 }, (_, i) => {
  return `/catering/image0${i + 1}.jpg`;
});

export default function CateringPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
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
          <p className="mx-auto max-w-2xl text-xl text-white">
            Experience authentic Naga cuisine curated by award-winning Chef
            Salang Yanger for your special events
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto max-w-4xl text-center">
          <h2 className="heading-lg mb-8">
            Elevate Your Events with{" "}
            <span className="text-primary">Authentic Naga Cuisine</span>
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            <span className="text-secondary">
              Authentic Flavours. Professional Service. Unforgettable
              Experiences.
            </span>
            <br />
            Whether it's an intimate family gathering or a large-scale corporate
            event, Chef Salang, through Aromatic Fusion brings the rich, soulful
            taste of Nagaland and beyond to your table with precision and
            passion.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="photos" className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="heading-lg mb-16 text-center">
            Our Catering <span className="text-primary">Gallery</span>
          </h2>
          <div className="columns-2 gap-4 sm:columns-3">
            {images.map((imageUrl, idx) => (
              <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                <div className="group relative mb-4 w-full overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                    src={imageUrl}
                    alt={titles[idx]}
                    loading="lazy"
                    style={{
                      height:
                        idx % 3 === 0
                          ? "300px"
                          : idx % 2 === 1
                            ? "600px"
                            : "450px",
                      width:
                        idx % 3 === 0
                          ? "600px"
                          : idx % 2 === 1
                            ? "600px"
                            : "450px",
                    }}
                  />
                  {titles[idx] !== "" && (
                    <div className="absolute bottom-0 left-0 w-full translate-y-full bg-black/60 py-2 text-center text-white shadow-md transition-all duration-300 group-hover:translate-y-0">
                      {titles[idx]}
                    </div>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="columns-2 gap-4 sm:columns-3 md:columns-4">
        {images.map((src, idx) => (
          <BlurFade key={src} delay={0.25 + idx * 0.05} inView>
            <img
             
              className="mb-4 w-full rounded-lg object-cover"
              loading="lazy"
            />
          </BlurFade>
        ))}
      </div> */}

      {/* Event Types Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="heading-lg mb-16 text-center">
            Events We <span className="text-primary">Cater</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Wedding */}
            <div
              className="card-hover relative overflow-hidden rounded-lg p-8 text-white"
              style={{
                backgroundImage: "url('/weeding.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 z-0 rounded-lg bg-black bg-opacity-50" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary bg-opacity-10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold">Event Catering</h3>
                <p className="mb-6 text-muted-foreground">
                  From weddings and birthdays to anniversaries and festive
                  celebrations, we curate menus that make your special moments
                  even more memorable.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Wedding celebrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Birthday parties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Anniversary dinners</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Corporate */}
            <div
              className="card-hover relative overflow-hidden rounded-lg p-8 text-white"
              style={{
                backgroundImage: "url('/corporate.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 z-0 rounded-lg bg-black bg-opacity-50" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary bg-opacity-10">
                  <CalendarDays className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold">
                  Corporate Catering
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Perfect for office meetings, conferences, product launches,
                  and staff events. Energize your team with hearty meals that
                  inspire.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Office meetings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Conference events</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Staff team events</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Off-Premise */}
            <div
              className="card-hover relative overflow-hidden rounded-lg p-8 text-white"
              style={{
                backgroundImage: "url('/private-gatherings.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 z-0 rounded-lg bg-black bg-opacity-50" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary bg-opacity-10">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold">
                  Off-Premise Catering
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Food is prepared in our state-of-the-art kitchen and delivered
                  to your location—hot, hygienic, and on time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Kitchen-prepared delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Hot & hygienic transport</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>On-time delivery service</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Institutional */}
            <div
              className="card-hover relative overflow-hidden rounded-lg p-8 text-white"
              style={{
                backgroundImage: "url('/cultural-gatherings.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 z-0 rounded-lg bg-black bg-opacity-50" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary bg-opacity-10">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold">
                  Institutional Catering
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Dependable, nutritious, and delicious meals for schools,
                  hospitals, colleges, and government organizations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>School meal programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Hospital nutrition services</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Government facility catering</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* On-Premise */}
            <div
              className="card-hover relative overflow-hidden rounded-lg p-8 text-white"
              style={{
                backgroundImage: "url('/pop-up-dinning.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 z-0 rounded-lg bg-black bg-opacity-50" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary bg-opacity-10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold">
                  On-Premise Catering
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Let our team cook and serve fresh, hot meals right at your
                  venue. Live counters and direct service available.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Live cooking at venue</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Fresh hot meal service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-secondary" />
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
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="heading-lg mb-6 text-center">
            Signature Catering <span className="text-primary">Menu</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
            A fusion of indigenous Naga cuisine and pan-Asian classics. All
            dishes are made with premium ingredients, locally sourced wherever
            possible. Our menus are customizable to suit your event requirements
            and dietary preferences.
          </p>

          <div className="rounded-lg bg-card p-8 md:p-12">
            {/* Non-Veg Delights */}
            <div className="mb-12">
              <h3 className="mb-6 text-xl font-medium text-secondary">
                NON-VEG DELIGHTS
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">Pork</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Naga Style – Traditional preparation with fermented bamboo
                    shoots and indigenous spices <br /> Chinese – Stir-fried
                    with ginger and soy
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">Chicken</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Naga Style – We cook in dry bambooshoot and local herbs
                    <br />
                    Chinese – Wok-tossed with garlic and oriental flavors
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">Beef</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Indian Style – Rich curry with aromatic spices <br />{" "}
                    Chinese – Tender beef strips in savory sauce
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">Prawns</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Chilli Garlic – Spicy prawns with garlic and red chilies{" "}
                    <br />
                    Stir-Fry – Quick-cooked with vegetables and Asian seasonings
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">Mutton</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Indian Style – Slow-cooked mutton curry with traditional
                    spices and herbs
                  </p>
                </div>
              </div>
            </div>

            {/* Popular Combos */}
            <div className="mb-12">
              <h3 className="mb-6 text-xl font-medium text-secondary">
                POPULAR COMBOS
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">Any 2 Non-Veg Combo</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Perfect pairing of Pork + Chicken or choose any two non-veg
                    dishes for a satisfying meal
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">Any 3 Non-Veg Combo</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Ultimate feast with Pork + Chicken + Fish or any three
                    non-veg selections for larger gatherings
                  </p>
                </div>
              </div>
            </div>

            {/* Accompaniments */}
            <div className="mb-12">
              <h3 className="mb-6 text-xl font-medium text-secondary">
                ACCOMPANIMENTS
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">Steamed Rice</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Perfectly steamed basmati rice, the ideal base for our
                    flavorful dishes
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">Dal</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Fry – Crispy tempered lentils with spices | Tadka –
                    Traditional dal with aromatic seasoning
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">
                      Salad or Seasonal Boil
                    </h4>
                  </div>
                  <p className="text-muted-foreground">
                    Fresh garden salad or seasonal boiled vegetables to
                    complement your meal
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">Chutney</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Traditional chutneys with or without King Chilli (Ghost
                    Pepper) for the adventurous palate
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">Papad</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Crispy lentil wafers, a perfect crunchy addition to every
                    meal
                  </p>
                </div>
              </div>
            </div>

            {/* Complimentary Items */}
            <div>
              <h3 className="mb-6 text-xl font-medium text-secondary">
                COMPLIMENTARY SEASONAL ITEMS
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-lg font-medium">
                      Seasonal Specialties
                    </h4>
                  </div>
                  <p className="text-muted-foreground">
                    Enjoy complimentary seasonal items that showcase the best of
                    local produce and traditional preparations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-white">
            Why Choose <span className="text-primary">Us?</span>
          </h2>
          <div className="mx-auto mb-10 max-w-2xl text-xl text-white opacity-90">
            <p className="mb-4">✓ Authentic recipes with a modern touch</p>
            <p className="mb-4">✓ Customizable menus for all budgets</p>
            <p className="mb-4">
              ✓ Hygiene, punctuality, and service excellence
            </p>
            <p className="mb-4">✓ Chef-led team with years of experience</p>
            <p>✓ Serving across Nagaland and nearby regions</p>
          </div>
        </div>
      </section>

      {/* Catering Process */}
      <section
        className="section-padding bg-card"
        style={{
          backgroundImage: "url('/catering-process.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
        }}
      >
        <div className="container-custom">
          <h2 className="heading-lg mb-16 text-center">
            Our Catering <span className="text-primary">Process</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative">
              <div className="rounded-lg bg-background p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  1
                </div>
                <h3 className="mb-4 text-xl font-semibold">Consultation</h3>
                <p className="text-muted-foreground">
                  We begin with a detailed discussion about your event,
                  preferences, dietary requirements, and vision.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="rounded-lg bg-background p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  2
                </div>
                <h3 className="mb-4 text-xl font-semibold">Menu Creation</h3>
                <p className="text-muted-foreground">
                  Chef Salang personally designs a customized menu based on your
                  requirements and seasonal availability.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="rounded-lg bg-background p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  3
                </div>
                <h3 className="mb-4 text-xl font-semibold">Tasting Session</h3>
                <p className="text-muted-foreground">
                  Experience a sample of your selected dishes to ensure they
                  meet your expectations before finalizing.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="rounded-lg bg-background p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  4
                </div>
                <h3 className="mb-4 text-xl font-semibold">Execution</h3>
                <p className="text-muted-foreground">
                  Chef Salang and his team handle all aspects of food
                  preparation ensuring a seamless experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-white">
            Bring Chef Salang's signature flavors to your next event.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white opacity-90">
            Contact us today to discuss your requirements and check
            availability.
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
