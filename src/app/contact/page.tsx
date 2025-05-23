import Image from 'next/image';
import { Instagram, Facebook, Youtube, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Chef Salang Yanger',
  description: 'Get in touch with Chef Salang Yanger for catering services, collaborations, media inquiries, or product orders.',
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work with Chef Salang? We'd love to hear from you!
          </p>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="heading-lg mb-8">Contact <span className="text-primary">Information</span></h2>
              
              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
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
                    <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground mb-2">
                      For the quickest response, reach out via WhatsApp
                    </p>
                    <a 
                      href="https://wa.me/+918794854520" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      +918794854520
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground mb-2">
                      For detailed inquiries and formal communications
                    </p>
                    <a 
                      href="mailto:info@chefsalang.com"
                      className="text-primary font-medium hover:underline"
                    >
                      info@chefsalang.com
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Based in Kohima, Nagaland, India<br />
                      Available for travel and events nationwide
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Connect on Social Media</h3>
                
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://www.instagram.com/salangyanger/?igsh=a3VkMzM4dW1pdHRj#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-card rounded-lg hover:bg-primary hover:bg-opacity-10 transition-all"
                  >
                    <Instagram className="w-6 h-6 text-primary mr-4" />
                    <span className="font-medium">@chefsalangyanger</span>
                  </a>
                  
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-card rounded-lg hover:bg-primary hover:bg-opacity-10 transition-all"
                  >
                    <Facebook className="w-6 h-6 text-primary mr-4" />
                    <span className="font-medium">Chef Salang Yanger</span>
                  </a>
                  
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-card rounded-lg hover:bg-primary hover:bg-opacity-10 transition-all"
                  >
                    <Youtube className="w-6 h-6 text-primary mr-4" />
                    <span className="font-medium">Chef Salang's Kitchen</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=2938&auto=format&fit=crop"
                alt="Chef Salang preparing food"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="section-padding bg-card">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-12">Send a <span className="text-primary">Message</span></h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="What is this regarding?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
              <textarea 
                id="message" 
                rows={6}
                className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-12">Frequently Asked <span className="text-primary">Questions</span></h2>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How far in advance should I book Chef Salang for catering?</h3>
              <p className="text-muted-foreground">
                For events like weddings and large corporate functions, we recommend booking at least 2-3 months in advance. 
                For smaller gatherings, 2-4 weeks' notice is usually sufficient, subject to availability.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Does Chef Salang cater outside of Nagaland?</h3>
              <p className="text-muted-foreground">
                Yes, Chef Salang is available for events throughout India. Additional travel fees may apply depending on the location.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How can I order Chef Salang's products?</h3>
              <p className="text-muted-foreground">
                Products can be ordered through our Instagram shop or by sending a direct message on WhatsApp. 
                We currently offer shipping throughout India.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Is Chef Salang available for media appearances and collaborations?</h3>
              <p className="text-muted-foreground">
                Yes, Chef Salang is available for media appearances, cooking demonstrations, collaborations, and consultancy work. 
                Please contact us with details of your request.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can Chef Salang accommodate dietary restrictions?</h3>
              <p className="text-muted-foreground">
                Yes, Chef Salang can accommodate various dietary restrictions and preferences. 
                Please mention any specific requirements during the consultation phase.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Let's Create Something Special Together
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto">
            Whether you're planning an event, interested in Chef Salang's products, or have a business proposition, 
            we're excited to hear from you.
          </p>
          <a 
            href="https://wa.me/+918794854520" 
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
