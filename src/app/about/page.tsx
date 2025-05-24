import Image from 'next/image';
import Link from 'next/link';
import { Check, Award } from 'lucide-react';

export const metadata = {
  title: 'About Chef Salang Yanger',
  description: 'Learn about Chef Salang Yanger, an award-winning chef specializing in authentic Naga cuisine. Discover his journey, achievements, and culinary philosophy.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-card">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="heading-xl mb-6">
              About <span className="text-primary">Chef Salang</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Chef Salang Yanger is an award-winning culinary artist, passionate about
              preserving and elevating traditional Naga cuisine to new heights.
            </p>
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                <p>Winner of Naga Chef Season 3</p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                <p>Featured Chef at Hornbill Festival 2015</p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                <p>Specializes in authentic Naga cuisine with modern presentation</p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                <p>Advocate for promoting local ingredients and cooking techniques</p>
              </div>
            </div>
            <Link href="/contact" className="btn-primary">
              Work with Chef Salang
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/images/IMG-20250523-WA0019.jpg"
                alt="Chef Salang Yanger in his kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
   {/* Featured In Magazine */}
<section className="section-padding bg-card">
  <div className="container-custom">
    <h2 className="heading-lg font-bold text-center mb-6">Featured In <span className="text-primary">The LEELA MAGAZINE </span> </h2>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden card-hover">
        <Image
          src="/images/magazine-left.jpg"
          alt="Dish prepared by Chef Salang Yanger"
          fill
          className="object-fit"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden card-hover">
        <Image
          src="/images/magazine-right.jpg"
          alt="Magazine feature of Chef Salang Yanger"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </div>
</section>

      {/* Full Bio Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-16">The Culinary <span className="text-primary">Journey</span></h2>

          <div className="prose prose-lg prose-invert mx-auto">
            <p>
              Born and raised in Nagaland, Chef Salang Yanger's culinary journey began in his mother's kitchen,
              where he learned the traditional cooking methods that would later become the foundation of his culinary philosophy.
            </p>

            <p>
              After completing his formal culinary education, Chef Salang dedicated himself to mastering the
              complexities of Naga cuisine—a rich tapestry of flavors characterized by its bold use of indigenous
              herbs, fermented ingredients, and distinctive cooking techniques.
            </p>

            <p>
              His breakthrough came when he won Season 3 of the prestigious Naga Chef competition,
              where his innovative approach to traditional dishes captivated both judges and audiences.
              This victory opened doors to showcase his talents at various culinary events across India,
              including the renowned Hornbill Festival in 2015.
            </p>

            <p>
              Chef Salang's cooking style honors tradition while embracing modern techniques and presentation.
              His philosophy centers around sustainable cooking practices, supporting local farmers,
              and educating people about the rich culinary heritage of Nagaland.
            </p>

            <p>
              Today, Chef Salang runs a successful catering business, creates content showcasing Naga cuisine,
              develops specialty food products, and continues to be an ambassador for northeastern Indian cuisine
              on national and international platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-card relative">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-16">
            Career <span className="text-primary">Highlights</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-muted z-0"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {/* Timeline Entry Template */}
              {[
                {
                  year: '2013',
                  title: 'Culinary Education',
                  description:
                    'Completed formal culinary training with specialization in regional Indian cuisines',
                },
                {
                  year: '2014',
                  title: 'Naga Chef Victory',
                  description:
                    'Won Season 3 of the Naga Chef competition with his signature dish featuring smoked pork and axone',
                },
                {
                  year: '2015',
                  title: 'Hornbill Festival Feature',
                  description:
                    'Showcased traditional Naga cuisine at the prestigious Hornbill Festival, representing the culinary heritage of the region',
                },
                {
                  year: '2017',
                  title: 'Catering Business Launch',
                  description:
                    'Established a successful catering business specializing in authentic Naga cuisine for events and private dining',
                },
                {
                  year: '2019',
                  title: 'Product Line Launch',
                  description:
                    'Introduced a line of artisanal Naga food products including specialty sausages and fermented goods',
                },
                {
                  year: '2022',
                  title: 'Digital Content Creation',
                  description:
                    'Expanded into digital content, sharing authentic Naga recipes and culinary knowledge on various platforms',
                },
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-secondary"></div>
                  </div>
                  {/* Content */}
                  <span className="text-secondary text-xl font-bold mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Client & Jury <span className="text-primary">Testimonials</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card p-8 rounded-lg">
              <Award className="w-10 h-10 text-secondary mb-6" />
              <blockquote className="text-lg mb-6">
                "Chef Salang's innovative approach to Naga cuisine while maintaining authenticity is truly commendable. His dishes tell the story of Nagaland's rich culinary traditions."
              </blockquote>
              <div>
                <p className="font-semibold">Chef Kunal Kapur</p>
                <p className="text-muted-foreground text-sm">Naga Chef Season 3 Judge</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card p-8 rounded-lg">
              <Award className="w-10 h-10 text-secondary mb-6" />
              <blockquote className="text-lg mb-6">
                "The catering service provided by Chef Salang for our corporate event was exceptional. The authentic Naga flavors left a lasting impression on our international guests."
              </blockquote>
              <div>
                <p className="font-semibold">Vihang Sarkar</p>
                <p className="text-muted-foreground text-sm">Executive Director, Global Ventures Ltd.</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card p-8 rounded-lg">
              <Award className="w-10 h-10 text-secondary mb-6" />
              <blockquote className="text-lg mb-6">
                "Chef Salang's presentation at the Hornbill Festival beautifully showcased the diversity and richness of Naga cuisine. His passion for preserving culinary heritage is inspiring."
              </blockquote>
              <div>
                <p className="font-semibold">Dr. Meren Jamir</p>
                <p className="text-muted-foreground text-sm">Cultural Historian</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Work with Chef Salang
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto">
            Whether it's for catering, collaborations, or consultations, Chef Salang is available to bring authentic Naga cuisine to your table.
          </p>
          <Link href="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
