import Image from "next/image";
import { Instagram, Facebook, Youtube, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Chef Salang Yanger",
  description:
    "Get in touch with Chef Salang Yanger for catering services, collaborations, media inquiries, or product orders.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Have a question or want to work with Chef Salang? We'd love to hear
            from you!
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="heading-lg mb-8">
                Contact <span className="text-primary">Information</span>
              </h2>

              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary bg-opacity-10">
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
                      className="text-primary"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9 14a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold">WhatsApp</h3>
                    <p className="mb-2 text-muted-foreground">
                      For the quickest response, reach out via WhatsApp
                    </p>
                    <a
                      href="https://wa.me/+918798769559"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline"
                    >
                      +918798769559
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary bg-opacity-10">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold">Email</h3>
                    <p className="mb-2 text-muted-foreground">
                      For detailed inquiries and formal communications
                    </p>
                    <a
                      href="mailto:info@chefsalang.com"
                      className="font-medium text-primary hover:underline"
                    >
                      samoajr@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary bg-opacity-10">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      Based in Kohima, Nagaland, India
                      <br />
                      Available for travel and events nationwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="mb-6 text-xl font-semibold">
                  Connect on Social Media
                </h3>

                <div className="flex flex-col space-y-4">
                  <a
                    href="https://www.instagram.com/salangyanger/?igsh=a3VkMzM4dW1pdHRj#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-card p-3 transition-all hover:bg-primary hover:bg-opacity-10"
                  >
                    <Instagram className="mr-4 h-6 w-6 text-primary" />
                    <span className="font-medium">@chefsalangyanger</span>
                  </a>

                  <a
                    href="https://www.facebook.com/share/1Eh7KEDw6Z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-card p-3 transition-all hover:bg-primary hover:bg-opacity-10"
                  >
                    <Facebook className="mr-4 h-6 w-6 text-primary" />
                    <span className="font-medium">Chef Salang Yanger</span>
                  </a>

                  <a
                    href="https://www.youtube.com/@cookingwithchefsalang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-card p-3 transition-all hover:bg-primary hover:bg-opacity-10"
                  >
                    <Youtube className="mr-4 h-6 w-6 text-primary" />
                    <span className="font-medium">Chef Salang's Kitchen</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-[500px] overflow-hidden rounded-xl">
              <Image
                src="/images/IMG-20250523-WA0026.jpg"
                alt="Chef Salang preparing food"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="heading-lg mb-12 text-center">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">
                How far in advance should I book Chef Salang for catering?
              </h3>
              <p className="text-muted-foreground">
                For events like weddings and large corporate functions, we
                recommend booking at least 2-3 months in advance. For smaller
                gatherings, 2-4 weeks' notice is usually sufficient, subject to
                availability.
              </p>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Does Chef Salang cater outside of Nagaland?
              </h3>
              <p className="text-muted-foreground">
                Yes, Chef Salang is available for events throughout India.
                Additional travel fees may apply depending on the location.
              </p>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">
                How can I order Chef Salang's products?
              </h3>
              <p className="text-muted-foreground">
                Products can be ordered through our Instagram shop or by sending
                a direct message on WhatsApp. We currently offer shipping
                throughout India.
              </p>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Is Chef Salang available for media appearances and
                collaborations?
              </h3>
              <p className="text-muted-foreground">
                Yes, Chef Salang is available for media appearances, cooking
                demonstrations, collaborations, and consultancy work. Please
                contact us with details of your request.
              </p>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Can Chef Salang accommodate dietary restrictions?
              </h3>
              <p className="text-muted-foreground">
                Yes, Chef Salang can accommodate various dietary restrictions
                and preferences. Please mention any specific requirements during
                the consultation phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-white">
            Let's Create Something Special Together
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white opacity-90">
            Whether you're planning an event, interested in Chef Salang's
            products, or have a business proposition, we're excited to hear from
            you.
          </p>
          <a
            href="https://wa.me/+918798769559"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Contact Chef Salang Now
          </a>
        </div>
      </section>
    </div>
  );
}
