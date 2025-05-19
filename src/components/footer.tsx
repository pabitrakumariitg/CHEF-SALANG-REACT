'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and about */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-primary">CHEF</span> 
                <span className="text-white">SALANG</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Award-winning chef specializing in authentic Naga cuisine. Winner of Naga Chef Season 3 
              and featured at Hornbill Festival 2015.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white hover:text-primary transition-colors" />
              </motion.a>
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white hover:text-primary transition-colors" />
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white hover:text-primary transition-colors" />
              </motion.a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Chef Salang
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-muted-foreground hover:text-primary transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-muted-foreground hover:text-primary transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp Chef Salang
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a 
                  href="mailto:info@chefsalang.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@chefsalang.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border my-8" />

        {/* Copyright and powered by */}
        <div className="flex flex-col md:flex-row md:items-center justify-between text-sm">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Chef Salang Yanger. All rights reserved.
          </p>
          <p className="text-muted-foreground mt-2 md:mt-0">
            Powered by <span className="text-white font-medium">KAKI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
