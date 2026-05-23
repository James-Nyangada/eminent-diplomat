"use client";
import React, { useEffect, useState } from "react";
import imagesLoaded from "imagesloaded";
import "./Loader.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make sure we wait for images to load, which ensures that all resources have been processed.
    const imgLoad = imagesLoaded(document.body);
    
    imgLoad.on("always", () => {
      // Small delay just to ensure the UI paints before we remove the loader
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });

    return () => {
      imgLoad.off("always");
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="honeycomb">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
