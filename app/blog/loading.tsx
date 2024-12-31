"use client"

import React , {useState,useEffect} from 'react';

import './Skeleton.css'; 

const SkeletonLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer); 
  }, []);

  <div className="skeleton-wrapper">
    <div className="skeleton skeleton-avatar"></div>
    <div className="skeleton skeleton-line"></div>
    <div className="skeleton skeleton-line"></div>
  </div>
};

export default SkeletonLoader;
