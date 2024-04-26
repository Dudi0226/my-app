"use client"

import React, { useState, useEffect } from 'react';
import LogoutButton from './LogoutButton'; 
import PlanItem from '../sections/_home/plan-item';

const UserPosts = () => {
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.gosim.mn:8080/home/getPlan/49/ `);
        const data = await response.json();
        setPlan(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Logout button */}
      <LogoutButton />
      <br/>
      {!loading ? (
        <>
          <PlanItem plan={plan.result} />
        </>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserPosts;
