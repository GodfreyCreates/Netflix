import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { IoIosArrowForward } from "react-icons/io";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}></div>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-16">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Unlimited movies, TV shows, and more</h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">Watch anywhere. Cancel anytime.</p>
        <p className="mt-2 text-md sm:text-lg md:text-xl lg:text-2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-4 gap-2">
          <Input type="email" placeholder="Email address" className="rounded w-full sm:w-auto p-3 sm:p-4 md:p-5 lg:p-6 text-base sm:text-lg md:text-xl lg:text-2xl" />
          <Button className="rounded p-3 sm:p-4 md:p-5 lg:p-6 text-base sm:text-lg md:text-xl lg:text-2xl flex items-center mt-4 sm:mt-0">
            Get Started <IoIosArrowForward size={30} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
