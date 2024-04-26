"use client"

import React, {useEffect} from 'react';
import UserPosts from './problem';
import { useRouter } from 'next/navigation';

function App() {
  const router=useRouter();
  const auth_token = localStorage.getItem("token");

  useEffect(() => {
    if (!auth_token) {
      console.log("no token exists");
      router.push('/');
    }
  }, []);
  
  return (
    <div>
      <h1>User Posts</h1>
      <h6>TOKEN: {auth_token}</h6>
      <UserPosts slug={1} />
    </div>
  );
}

export default App;