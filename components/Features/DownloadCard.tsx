import React from "react";
import Image from "next/image";

export const DownloadCard = () => {
  return (
    <div className="border-2 rounded-2xl shadow-lg max-w-md mx-auto p-4 bg-black 
                    sm:max-w-sm sm:p-2 sm:text-xs">
      <div className="flex items-center">
        {/* Boxshot Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/boxshot.png"
            alt="Stranger Things boxshot"
            width={40}
            height={60}
            className="object-cover sm:w-16 sm:h-24"
          />
        </div>

        {/* Stranger Things Text */}
        <div className="flex-grow text-start ml-4">
          <p className="text-xs sm:text-xs md:text-sm lg:text-base font-semibold">
            Stranger Things
          </p>
          <p className="mt-1 text-xs sm:text-xs md:text-sm lg:text-base text-blue-600">
            Downloading...
          </p>
        </div>

        {/* Download Icon */}
        <div className="flex-shrink-0">
          <Image
            src="/images/download-icon.gif"
            alt="Download icon"
            width={30}
            height={30}
            className="object-contain sm:w-6 sm:h-6"
          />
        </div>
      </div>
    </div>
  );
};
