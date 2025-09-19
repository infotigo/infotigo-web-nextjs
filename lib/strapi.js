// Strapi API configuration and utility functions

const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Fetch data from Strapi API
 * @param {string} endpoint - The API endpoint
 * @param {object} options - Additional fetch options
 * @returns {Promise} - The API response
 */
export async function fetchAPI(endpoint, options = {}) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Add authorization header if token is available
  if (STRAPI_API_TOKEN) {
    defaultOptions.headers.Authorization = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const url = `${STRAPI_API_URL}/api${endpoint}`;
    const response = await fetch(url, mergedOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API fetch error:", error);
    throw error;
  }
}

/**
 * Get general settings from Strapi
 * @returns {Promise} - General settings data
 */
export async function getGeneralSetting() {
  try {
    // Adjust the endpoint based on your Strapi content type structure
    // Common patterns: /general-setting, /general-settings, /setting
    const data = await fetchAPI("/general-setting?populate=*");

    // Return the data based on Strapi's response structure
    // For single type: data.data
    // For collection type: data.data[0] or data.data
    return data;
  } catch (error) {
    console.error("Error fetching general settings:", error);
  }
}

/**
 * Get footer settings from Strapi
 * @returns {Promise} - Footer settings data
 */
export async function getFooterSetting() {
  try {
    // Adjust the endpoint based on your Strapi content type structure
    // Common patterns: /footer-setting, /footer-settings, /setting
    const data = await fetchAPI("/footer-setting?populate=*");

    // Return the data based on Strapi's response structure
    // For single type: data.data
    // For collection type: data.data[0] or data.data
    return data;
  } catch (error) {
    console.error("Error fetching footer settings:", error);
  }
}
