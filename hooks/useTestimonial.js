"use client";
import { getTestimonial } from "@/lib/strapi";
import { useState, useEffect } from "react";

/**
 * Custom hook to fetch testimonial data from Strapi
 * @returns {Object} - Testimonial data
 */
export default function useTestimonial() {
  const [testimonial, setTestimonial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const data = await getTestimonial();
        setTestimonial(data?.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonial();
  }, []);

  return { testimonial, loading, error };
}
