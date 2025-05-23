import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, UtensilsCrossed, ChefHat, Gift, PlayCircle, PhoneCall } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/featured-magazine.jpg"
            alt="Chef Salang cooking traditional Naga food"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
        </div>

        <div className="container-custom relative z-10 text-center">

          <p className="text-xl md:text-6xl text-white mt-6 max-w-3xl mx-auto">
            Winner of Naga Chef <span className="text-secondary">Season 3</span>
          </p>

          <h1 className="text-3xl md:text-7xl font-bold text-primary drop-shadow-lg mt-6">
            Celebrating Naga Cuisine
          </h1>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/about" className="btn-primary">
              Discover My Journey
            </Link>
            <Link href="/catering" className="btn-outline">
              Catering Services
            </Link>
          </div>
        </div>
      </section>

      {/* Short Bio Section */}
      <section className="section-padding bg-card">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden card-hover">
            <Image
              src="/images/ChefSalangYanger.jpg"
              alt="Chef Salang Yanger portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="heading-lg mb-6">
              <span className="text-primary">Award-Winning</span> Naga Culinary Master
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Chef Salang Yanger brings the rich flavors of Nagaland to life through his innovative
              culinary techniques while respecting traditional methods. With over a decade of
              experience and recognition, Chef Salang has established himself as a pioneer in
              elevating Naga cuisine to international standards.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From winning Naga Chef Season 3 to showcasing his talents at the prestigious
              Hornbill Festival in 2015, Chef Salang continues to push boundaries while preserving
              the authentic essence of Naga food heritage.
            </p>
            <Link href="/about" className="btn-primary">
              Full Biography <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">
            Explore <span className="text-primary">Chef Salang's</span> World
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Signature Dishes */}
            <Link
              href="/gallery"
              className="bg-card p-8 rounded-lg flex flex-col items-center text-center card-hover"
            >
              <UtensilsCrossed className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Signature Dishes</h3>
              <p className="text-muted-foreground">Exquisite Naga creations crafted with passion</p>
            </Link>

            {/* Catering */}
            <Link
              href="/catering"
              className="bg-card p-8 rounded-lg flex flex-col items-center text-center card-hover"
            >
              <ChefHat className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Catering</h3>
              <p className="text-muted-foreground">Bringing authentic Naga flavors to your events</p>
            </Link>

            {/* Products */}
            <Link
              href="/products"
              className="bg-card p-8 rounded-lg flex flex-col items-center text-center card-hover"
            >
              <Gift className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Products</h3>
              <p className="text-muted-foreground">Artisanal Naga products for your kitchen</p>
            </Link>

            {/* Videos */}
            <Link
              href="/videos"
              className="bg-card p-8 rounded-lg flex flex-col items-center text-center card-hover"
            >
              <PlayCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Videos</h3>
              <p className="text-muted-foreground">Watch Chef Salang in action</p>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="bg-card p-8 rounded-lg flex flex-col items-center text-center card-hover"
            >
              <PhoneCall className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-muted-foreground">Get in touch for collaborations and inquiries</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dish */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden card-hover">
              <Image
                src="/images/FEATURED_DISH.jpg"
                alt="Dish prepared by Chef Salang Yanger"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="relative p-12 md:p-16 lg:p-24 max-w-13xl">
              <h3 className="text-secondary text-4xl mb-2">Featured Dish</h3>
              <p className="mb-6 italic font-[cursive]">~ Potroast Chicken in a sweet chili sauce garnished with local mustard leaves and edible herbs and flowers</p>

              <Link href="/gallery" className="btn-secondary">
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Experience Authentic Naga Cuisine?
          </h2>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
            Let Chef Salang create a memorable culinary experience for your next event.
          </p>
          <a
            href="https://wa.me/+918794854520"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            Book Chef Salang
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
