"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card pb-6 pt-16 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Logo and about */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <img src="/Chef Salang W.png" alt="Logo" className="w-1/2" />
            </Link>
            <p className="mb-6 text-muted-foreground">
              Award-winning chef specializing in authentic Naga cuisine. Winner
              of Naga Chef Season 3 and featured at Hornbill Festival 2015.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/salangyanger/?igsh=a3VkMzM4dW1pdHRj#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white transition-colors hover:text-primary" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/1Eh7KEDw6Z/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white transition-colors hover:text-primary" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@cookingwithchefsalang"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-white transition-colors hover:text-primary" />
              </motion.a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About Chef Salang
                </Link>
              </li>
              <li>
                <Link
                  href="/catering"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Catering Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <a
                  href="https://wa.me/+918798769559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  WhatsApp Chef Salang
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <a
                  href="mailto:samoajr@gmail.com"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  samoajr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-border" />

        {/* Copyright and powered by */}
        <div className="flex flex-col justify-between text-sm md:flex-row md:items-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Chef Salang Yanger. All rights
            reserved.
          </p>
          <p className="mt-2 text-muted-foreground md:mt-0">
            Powered by <span className="font-medium text-white">KAKI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
