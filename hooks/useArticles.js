"use client";
import { getArticles } from "@/lib/strapi";
import { useState, useEffect } from "react";

/**
 * Custom hook to fetch articles data from Strapi
 * @returns {Object} - Articles data, loading state, and error
 */
export default function useArticles(page, pageSize) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await getArticles(page, pageSize);
        setArticles(data?.data || []);
        setMeta(data?.meta || null);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [page, pageSize]);

  return { articles, loading, error, meta };
}
