import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavBar/NavBar';
import AllExcercises from '@/utils/AllExcercises/allExcercises';
import imageUrl from '../homebrian.jpeg';
import Search from '@/components/Search/Search';

export default function Home() {
  return (
    <div className="relative">
    <Image
      src={imageUrl}
      className="object-cover h-full w-full fixed z-0"
      alt="Background Image"
    />
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>
    <div className="relative z-10">
      <NavBar />
      <Search />
      <AllExcercises />
    </div>
  </div>
  );
}
  