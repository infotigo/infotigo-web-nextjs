'use client';

import useCategories from "@/hooks/useCategories";
const BlogCategories = () => {
  const { categories, loading, error } = useCategories();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="widget catogry">
      <h6 className="title-widget">Categories</h6>
      <ul className="rest">
        {categories.map((category) => (
          <li key={category.id} style={{ border: '1px solid #222222', marginBottom: '5px' }}>
            <span>
              <a href={`/category/${category.slug}`}>{category.name}</a>
            </span>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default BlogCategories;
