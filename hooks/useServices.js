"use client";
import { getServices } from "@/lib/strapi";
import { useState, useEffect } from "react";

/**
 * Custom hook to fetch services from Strapi
 * @returns {Object} - Services data
 */
export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getServices()
      .then((data) => {
        setServices(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { services, loading, error };
}
