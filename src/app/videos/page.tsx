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
      description: 'Learn how to prepare authentic smoked pork with Chef Salang\'s special techniques.',
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
      title: 'Product Showcase: Chef Salang\'s Sausages',
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
     
    </div>
  );
}
