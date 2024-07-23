import React from "react";
import Image from "next/image";
import { DownloadCard } from "./DownloadCard";

export const SecondFeature = () => {
  return (
    <section className="min-h-[70vh] bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 p-8">
        <div className="relative flex items-center justify-center">
          <div className="relative">
            {/* Background Image */}
            <Image
              src="/images/mobile-0819.jpg"
              alt="mobile"
              width={900}
              height={700}
              className="object-cover"
            />

            {/* DownloadCard in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <DownloadCard />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
              Download your shows to watch offline
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
