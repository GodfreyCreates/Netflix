import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full p-4 z-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="logo" width={200} height={100} />
        </div>
        <div>
          <Button className=' py-0 px-5 rounded'>Sign In</Button>
        </div>
      </div>
    </nav>
  );
};
