'use client'
import { useState } from 'react';
import MyArr from "./MyArr";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const myArr = ['Courses', 'My Schedule'];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyArr myArr={myArr} activeIndex={activeIndex} handleClick={handleClick} />
    </main>
  );
}
