"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const MyComponent = () => {
  const router = useRouter();

  const handleReplacePage = () => {
    localStorage.clear(); 
    console.log('localStorage cleared');
    router.replace('/');
  };

  const handleCoffeePage = () => {
    router.push('/coffee');
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
    }
  }, []);

  return (
    <>
    <button onClick={handleCoffeePage}>Coffee</button>
    <button onClick={handleReplacePage}>Logout</button>
    </>
  );
};

export default MyComponent;
