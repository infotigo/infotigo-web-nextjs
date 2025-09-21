"use client";

import { getWhyChooseUs } from "@/lib/strapi";
import { useEffect, useState } from "react";

export function useWhyChooseUs() {
  const [whyChooseUs, setWhyChooseUs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWhyChooseUs()
      .then((data) => {
        setWhyChooseUs(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return { whyChooseUs, loading };
}
