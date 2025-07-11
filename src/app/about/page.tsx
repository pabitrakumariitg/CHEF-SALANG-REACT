import Image from "next/image";
import Link from "next/link";
import { Check, Award } from "lucide-react";

export const metadata = {
  title: "About Chef Salang Yanger",
  description:
    "Learn about Chef Salang Yanger, an award-winning chef specializing in authentic Naga cuisine. Discover his journey, achievements, and culinary philosophy.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-card">
        <div className="container-custom grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h1 className="heading-xl mb-6">
              About <span className="text-primary">Chef Salang</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Chef Salang Yanger is an award-winning culinary artist, passionate
              about preserving and elevating traditional Naga cuisine to new
              heights.
            </p>
            <div className="mb-8 flex flex-col space-y-4">
              <div className="flex items-start">
                <Check className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <p>Winner of Naga Chef Season 3</p>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <p>Featured Chef at Hornbill Festival 2015</p>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <p>
                  Specializes in authentic Naga cuisine with modern presentation
                </p>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <p>
                  Advocate for promoting local ingredients and cooking
                  techniques
                </p>
              </div>
            </div>
            <Link href="/contact" className="btn-primary">
              Work with Chef Salang
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg lg:h-[600px]">
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
          <h2 className="heading-lg mb-6 text-center font-bold">
            Featured In{" "}
            <span className="text-primary">The LEELA MAGAZINE </span>{" "}
          </h2>

          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div className="card-hover relative h-[400px] overflow-hidden rounded-lg md:h-[600px]">
              <Image
                src="/images/magazine-left.jpg"
                alt="Dish prepared by Chef Salang Yanger"
                fill
                className="object-fit"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="card-hover relative h-[400px] overflow-hidden rounded-lg md:h-[600px]">
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
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="heading-lg mb-12 text-center">
            Meet <span className="text-primary">Chef Salangyanger Jamir</span>
          </h2>

          <div className="prose prose-lg prose-invert mx-auto space-y-8">
            <p>
              Chef Salangyanger Jamir is a professional chef from Mopungchuket
              village in Mokokchung district, Nagaland, and is currently based
              in Kohima. Known for his creative approach to food, he blends
              traditional Naga ingredients and cooking methods with modern
              techniques to give local dishes a fresh twist.
            </p>

            <p>
              After winning the title of ‘Naga Chef’ at the Hornbill Festival in
              2015, Chef Salangyanger gained recognition for his dedication to
              preserving and promoting Naga cuisine. He also specializes in
              Japanese cooking and vegetable carving, bringing a unique style
              and precision to his dishes.
            </p>

            <p>
              He is the author of the cookbook{" "}
              <em>Naga Appetite: A Collection of Essential Recipes</em>, which
              features authentic recipes using Naga spices, herbs, and local
              ingredients. His experiences include time at top hotels across
              India—The Grand (New Delhi), Leela Palace (Bengaluru), and Crown
              Plaza (Gurgaon)—which helped him sharpen his skills and expand his
              cooking knowledge.
            </p>

            <p>
              Chef Salangyanger has taken Naga food to the international stage,
              including the V-Rox Expo in Vladivostok, Russia, where he
              showcased his signature dishes:
            </p>

            {/* Dish 1 */}
            <div className="bg-muted/10 rounded-xl p-4 shadow-sm md:p-6">
              <h3 className="mb-2 text-xl font-semibold">Lang Lang Chicken</h3>
              <p className="mb-4">
                Pot Roasted Chicken with Szechuan pepper, sautéed Alu Lasung
                (Naga wild Garlic), and cherry tomatoes.
              </p>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="/images/Lang-CHICKEN.jpg"
                  alt="Lang Lang Chicken"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Dish 2 */}
            <div className="bg-muted/10 rounded-xl p-4 shadow-sm md:p-6">
              <h3 className="mb-2 text-xl font-semibold">Porkshe</h3>
              <p className="mb-4">
                Deep-fried pork served with Nuoshi chutney.
              </p>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="/images/PorkRoast.jpg"
                  alt="Porkshe"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Dish 3 */}
            <div className="bg-muted/10 rounded-xl p-4 shadow-sm md:p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Bamboo Shoot Pork with Raja Mircha Chutney
              </h3>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src="/catering/image06.jpg"
                  alt="Bamboo Shoot Pork with Raja Mircha Chutney"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <p>
              He also represented Nagaland at the North East India Festival in
              Bangkok, where he hosted a pop-up experience featuring Naga
              cuisine. His bold, flavorful creations received great feedback
              from international food lovers curious about Nagaland’s culinary
              legacy.
            </p>

            <p>
              Today, he runs workshops and cooking classes in Nagaland and
              co-owns <strong>Aromatic Fusion</strong>, a catering service that
              explores creative food ideas. He also has a food processing unit
              called <strong>The Bouffage Experience</strong> in Dimapur,
              ensuring that the essence of Nagaland reaches far and wide.
            </p>

            <p>
              His goal is to keep Naga food culture alive, while also making it
              exciting and accessible for new audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding relative bg-card">
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="heading-lg mb-16 text-center">
            Career <span className="text-primary">Highlights</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-5 top-0 z-0 w-1 bg-muted"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {/* Timeline Entry Template */}
              {[
                {
                  year: "2013",
                  title: "Culinary Education",
                  description:
                    "Completed formal culinary training with specialization in pan-Asian and Continental cusines",
                },
                {
                  year: "2015",
                  title: "Naga Chef Victory",
                  description:
                    "Won Season 3 of the Naga Chef competition with his signature dish featuring LANG LANG Chicken and Last Taste (Sweet Potato Pudding)",
                },

                ,
                // {
                //   year: '2015',
                //   title: 'Hornbill Festival Feature',
                //   description:
                //     'I won the Naga chef in 2015 Hornbill Festival',
                // }
                {
                  year: "2017",
                  title: "Catering Business Launch",
                  description:
                    "Established a successful catering business specializing in authentic Naga cuisine for events and private dining",
                },
                {
                  year: "2019",
                  title: "Product Line Launch",
                  description:
                    "Introduced a line of artisanal Naga food products including specialty sausages and fermented goods",
                },
                {
                  year: "2022",
                  title: "Digital Content Creation",
                  description:
                    "Expanded into digital content, sharing authentic Naga recipes and culinary knowledge on various platforms",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <div className="h-5 w-5 rounded-full bg-secondary"></div>
                  </div>
                  {/* Content */}
                  <span className="mb-2 block text-xl font-bold text-secondary">
                    {item.year}
                  </span>
                  <h3 className="mb-2 text-2xl font-semibold">{item.title}</h3>
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
          <h2 className="heading-lg mb-16 text-center">
            Client <span className="text-primary">Testimonials</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Testimonial 1 */}
            <div className="rounded-lg bg-card p-8">
              <Award className="mb-6 h-10 w-10 text-secondary" />
              <blockquote className="mb-6 text-lg">
                "I still remember the first time I tried Chef Salang’s Lang Lang
                Chicken, it was the kind of dish that makes you pause mid-bite.
                Comforting but unexpected. And that black-and-white dish? So
                simple-looking, but packed with layers of flavor. You can tell
                there’s thought and care in every plate he puts out."
              </blockquote>
              <div>
                <p className="font-semibold">Kakivi Chishi</p>
                <p className="text-sm text-muted-foreground">
                  Managing Director, KAKI
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-lg bg-card p-8">
              <Award className="mb-6 h-10 w-10 text-secondary" />
              <blockquote className="mb-6 text-lg">
                "Chef Salang catered my mom’s birthday, and it felt more like a
                feast at home than an event. Every dish had that home-cooked
                warmth, but with his own signature twist. My mom was glowing,
                guests were asking for seconds, and I didn’t have to worry about
                a thing. It was honestly perfect."
              </blockquote>
              <div>
                <p className="font-semibold">Khakuli Chishi</p>
                <p className="text-sm text-muted-foreground">
                  Event Host & Entrepreneur
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-lg bg-card p-8">
              <Award className="mb-6 h-10 w-10 text-secondary" />
              <blockquote className="mb-6 text-lg">
                "I ordered the pork roast from Chef Salang’s Instagram on a
                whim. No expectations, just curiosity. But the food that arrived
                was full of heart. The pork was tender, smoky, and seasoned like
                it came out of someone’s home kitchen. It didn’t feel like a
                takeout order. It felt like someone cooked for me."
              </blockquote>
              <div>
                <p className="font-semibold">Ajungla Ozukum</p>
                <p className="text-sm text-muted-foreground">
                  Writer & Food Enthusiast
                </p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="rounded-lg bg-card p-8">
              <Award className="mb-6 h-10 w-10 text-secondary" />
              <blockquote className="mb-6 text-lg">
                “Chef Salang’s sausage was a total surprise. I thought I knew
                what to expect, but the first bite proved me wrong. Juicy,
                perfectly spiced, and with that hint of smokiness that makes you
                slow down and really enjoy it. Honestly, one of the best I’ve
                had in a long time."
              </blockquote>
              <div>
                <p className="font-semibold">Mayasing Kheishing</p>
                <p className="text-sm text-muted-foreground">Food Lover</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-white">Work with Chef Salang</h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white opacity-90">
            Whether it's for catering, collaborations, or consultations, Chef
            Salang is available to bring authentic Naga cuisine to your table.
          </p>
          <Link href="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
