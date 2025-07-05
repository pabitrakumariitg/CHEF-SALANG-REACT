"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Play, ChevronRight } from "lucide-react";

// Dynamic import of ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => (
    <div className="aspect-video animate-pulse rounded-lg bg-card" />
  ),
});

export default function VideosPage() {
  const featuredVideos = [
    {
      id: "v1",
      title: "Ask the Chef",
      description:
        "Learn about Chef Salang Yanger, an award-winning chef specializing in authentic Naga cuisine.",
      thumbnail:
        "https://images.unsplash.com/photo-1668236543090-82475c010f12?q=80&w=2940&auto=format&fit=crop",
      url: "https://youtu.be/969NgWGt5-o?si=pilhw4BRxBZlc9YS",
      duration: "12:45",
      category: "Recipe",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(featuredVideos[0]); // Auto select first video for autoplay
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">
            Video <span className="text-primary">Gallery</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Watch Chef Salang's cooking demonstrations, behind-the-scenes
            footage, interviews, and more
          </p>
        </div>
      </section>

      {/* Featured Video Player Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="heading-lg mb-8">
              Featured <span className="text-primary">Videos</span>
            </h2>

            <div className="rounded-lg bg-card p-6">
              <div className="mb-6 aspect-video overflow-hidden rounded-lg">
                <ReactPlayer
                  url={selectedVideo ? selectedVideo.url : ""}
                  width="100%"
                  height="100%"
                  controls
                  playing
                  config={{
                    file: {
                      attributes: {
                        controlsList: "nodownload",
                      },
                    },
                  }}
                />
              </div>

              <h3 className="mb-2 text-2xl font-semibold">
                {selectedVideo?.title}
              </h3>
              <p className="mb-6 text-muted-foreground">
                {selectedVideo?.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12">
            <div className="rounded-lg bg-card p-6">
              <div className="mb-6 aspect-video overflow-hidden rounded-lg">
                <ReactPlayer
                  url="https://youtube.com/shorts/ypRUF_Xmp7c?si=rHNTDWbPPQ2KxAjt"
                  width="100%"
                  height="100%"
                  controls
                  playing
                  config={{
                    file: {
                      attributes: {
                        controlsList: "nodownload",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6 text-white">
            Subscribe to Chef Salang's YouTube Channel
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white opacity-90">
            Never miss a new video! Subscribe to Chef Salang's YouTube channel
            for weekly cooking tutorials, vlogs, and more.
          </p>
          <a
            href="https://www.youtube.com/@cookingwithchefsalang"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            <svg
              className="mr-2 h-5 w-5"
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
