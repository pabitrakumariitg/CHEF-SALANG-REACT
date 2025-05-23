'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
	{ name: 'Home', path: '/' },
	{ name: 'About', path: '/about' },
	{ name: 'Catering', path: '/catering' },
	{ name: 'Gallery', path: '/gallery' },
	{ name: 'Products', path: '/products' },
	{ name: 'Videos', path: '/videos' },
	{ name: 'Contact', path: '/contact' },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={cn(
				'fixed w-full top-0 z-50 transition-all duration-300',
				scrolled
					? 'bg-background bg-opacity-95 backdrop-blur-md shadow-lg py-3'
					: 'py-6'
			)}
		>
			<div className="container-custom flex items-center justify-between">
				<div className="flex items-center">
					<Link href="/">
						<img
							src="/Chef Salang W.png"
							alt="Logo"
							className="h-10 w-auto lg:h-12 object-contain"
						/>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex items-center space-x-8">
					{navLinks.map((link) => (
						<Link
							key={link.path}
							href={link.path}
							className="text-white font-medium text-lg xl:text-xl transition-all hover:text-primary"
						>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Social Icons - Desktop */}
				<div className="hidden lg:flex items-center space-x-4">
					<a
						href="https://www.instagram.com/salangyanger/?igsh=a3VkMzM4dW1pdHRj#"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
					>
						<Instagram className="w-5 h-5 text-white hover:text-primary transition-colors" />
					</a>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
					>
						<Facebook className="w-5 h-5 text-white hover:text-primary transition-colors" />
					</a>
					<a
						href="https://youtube.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="YouTube"
					>
						<Youtube className="w-5 h-5 text-white hover:text-primary transition-colors" />
					</a>
				</div>

				{/* Mobile menu button */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="lg:hidden text-white focus:outline-none"
					aria-label={isOpen ? 'Close menu' : 'Open menu'}
				>
					{isOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>

				{/* Mobile menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: '100%' }}
							transition={{ duration: 0.3 }}
							className="fixed inset-0 top-[72px] bg-background z-40 lg:hidden"
						>
							<div className="flex flex-col h-full p-8">
								<nav className="flex flex-col space-y-6 mb-8">
									{navLinks.map((link) => (
										<Link
											key={link.path}
											href={link.path}
											onClick={() => setIsOpen(false)}
											className="text-xl font-medium text-white hover:text-primary"
										>
											{link.name}
										</Link>
									))}
								</nav>

								{/* Social Icons - Mobile */}
								<div className="flex space-x-6 mt-auto">
									<a
										href="https://www.instagram.com/salangyanger/?igsh=a3VkMzM4dW1pdHRj#"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Instagram"
									>
										<Instagram className="w-6 h-6 text-white hover:text-primary transition-colors" />
									</a>
									<a
										href="https://facebook.com"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Facebook"
									>
										<Facebook className="w-6 h-6 text-white hover:text-primary transition-colors" />
									</a>
									<a
										href="https://youtube.com"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="YouTube"
									>
										<Youtube className="w-6 h-6 text-white hover:text-primary transition-colors" />
									</a>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}
