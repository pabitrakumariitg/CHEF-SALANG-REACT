'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Play, ChevronRight } from 'lucide-react';

// Dynamic import of ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => <div className="aspect-video bg-card animate-pulse rounded-lg" />
});

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const featuredVideos = [
    {
      id: 'v1',
      title: 'Traditional Naga Smoked Pork Recipe',
      description: 'Learn how to prepare authentic smoked pork with Chef Salang's special techniques.',
      thumbnail: 'https://images.unsplash.com/photo-1668236543090-82475c010f12?q=80&w=2940&auto=format&fit=crop',
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      duration: '12:45',
      category: 'Recipe'
    },
    {
      id: 'v2',
      title: 'Hornbill Festival 2015 Highlights',
      description: 'Behind the scenes with Chef Salang at the prestigious Hornbill Festival.',
      thumbnail: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2864&auto=format&fit=crop',
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      duration: '08:32',
      category: 'Event'
    },
    {
      id: 'v3',
      title: 'Foraging for Wild Herbs in Nagaland',
      description: 'Join Chef Salang as he explores the forests of Nagaland for indigenous herbs and ingredients.',
      thumbnail: 'https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?q=80&w=2940&auto=format&fit=crop',
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      duration: '15:20',
      category: 'Documentary'
    },
  ];
  
  const allVideos = [
    ...featuredVideos,
    {
      id: 'v4',
      title: 'Axone Preparation: Traditional Methods',
      description: 'Discover how this essential Naga fermented ingredient is prepared traditionally.',
      thumbnail: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?q=80&w=2787&auto=format&fit=crop',
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      duration: '10:15',
      category: 'Tutorial'
    },
    {
      id: 'v5',
      title: 'Winning Dish: Naga Chef Season 3',
      description: 'Chef Salang recreates the winning dish from Naga Chef competition.',
      thumbnail: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=2784&auto=format&fit=crop',
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      duration: '14:18',
      category: 'Recipe'
    },
    {
      id: 'v6',
      title: 'Raja Mircha Challenge',
      description: 'Watch Chef Salang and special guests take on the ghost pepper challenge.',
      thumbnail: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6c?q=80&w=2877&auto=format&fit=crop',
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      duration: '07:42',
      category: 'Entertainment'
    },
    {
      id: 'v7',
      title: 'Interview: The Future of Naga Cuisine',
      description: 'Chef Salang discusses preserving traditions while innovating for modern palates.',
      thumbnail: 'https://images.unsplash.com/photo-1593384205507-89462a654256?q=80&w=2946&auto=format&fit=crop',
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      duration: '18:36',
      category: 'Interview'
    },
    {
      id: 'v8',
      title: 'Cooking Class: Naga Bamboo Shoot Delicacies',
      description: 'Learn three unique ways to prepare bamboo shoots in traditional Naga style.',
      thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop',
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      duration: '22:10',
      category: 'Tutorial'
    },
    {
      id: 'v9',
      title: 'Product Showcase: Chef Salang's Sausages',
      description: 'Behind the scenes look at how Chef Salang creates his signature sausages.',
      thumbnail: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?q=80&w=2787&auto=format&fit=crop',
      url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      duration: '09:25',
      category: 'Product'
    },
  ];
  
  const videoCategories = Array.from(new Set(allVideos.map(video => video.category)));

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            Video <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch Chef Salang's cooking demonstrations, behind-the-scenes footage, interviews, and more
          </p>
        </div>
      </section>
      
      {/* Featured Video Player Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="heading-lg mb-8">Featured <span className="text-primary">Videos</span></h2>
            
            {/* Video Player */}
            <div className="bg-card p-6 rounded-lg">
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <ReactPlayer
                  url={selectedVideo ? selectedVideo.url : featuredVideos[0].url}
                  width="100%"
                  height="100%"
                  controls
                  playing={!!selectedVideo}
                  config={{
                    file: {
                      attributes: {
                        controlsList: 'nodownload'
                      }
                    }
                  }}
                />
              </div>
              
              <h3 className="text-2xl font-semibold mb-2">
                {selectedVideo ? selectedVideo.title : featuredVideos[0].title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {selectedVideo ? selectedVideo.description : featuredVideos[0].description}
              </p>
              
              {/* Featured Videos Thumbnails */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredVideos.map((video) => (
                  <div 
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedVideo && selectedVideo.id === video.id ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <Play className="w-10 h-10 text-white opacity-80" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium truncate">{video.title}</h4>
                      <p className="text-xs text-muted-foreground">{video.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Video Categories */}
          {videoCategories.map((category) => {
            const categoryVideos = allVideos.filter(v => v.category === category);
            return (
              <div key={category} className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <ChevronRight className="w-6 h-6 text-primary mr-2" />
                  {category} Videos
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryVideos.map((video) => (
                    <motion.div
                      key={video.id}
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedVideo(video)}
                      className="bg-card rounded-lg overflow-hidden cursor-pointer"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white opacity-80" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-lg mb-1">{video.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{video.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* YouTube Channel CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">
            Subscribe to Chef Salang's YouTube Channel
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto">
            Never miss a new video! Subscribe to Chef Salang's YouTube channel for weekly cooking tutorials, vlogs, and more.
          </p>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary inline-flex items-center"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
