import React from "react";
import Image from "next/image";

export const FirstFeature = () => {
  return (
    <section className="min-h-[70vh] bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 p-8">
        <div className="flex items-center justify-center">
          <div>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
              Enjoy on your TV
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center relative w-full h-full max-w-4xl">
          <div className="relative">
            <video
              className="absolute inset-0 object-cover w-full h-full"
              autoPlay
              muted
              loop
              preload="none"
            >
              <source src="/videos/video-tv-0819.m4v" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
            <Image
              src="/images/tv.png"
              alt="TV"
              width={600}
              height={400}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
