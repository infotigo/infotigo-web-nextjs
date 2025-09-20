"use client";

import { getPortfolio } from "@/lib/strapi";
import { useState } from "react";
import { useEffect } from "react";

export function usePortfolio() {
  const [portfolios, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolio()
      .then((data) => {
        setPortfolio(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return { portfolios, loading };
}
