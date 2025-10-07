/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';
import useArticles from '@/hooks/useArticles';
import { extractTextFromBlocks, formatDate } from '@/lib/richTextRenderer';
import Link from 'next/link';
import BlogCategories from '@/app/blog/components/BlogCategories';
import SidebarLatestPosts from '@/app/blog/components/SidebarLatestPosts';

function Blogs() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { articles, loading, error, meta } = useArticles(page, pageSize);

  if (loading) {
    return (
      <section className="blog-main section-padding">
        <div className="container">
          <div className="row lg-marg justify-content-around">
            <div className="col-lg-8">
              <div className="md-mb80">
                <div className="text-center">
                  <div className="loading-spinner">Loading articles...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="blog-main section-padding">
        <div className="container">
          <div className="row lg-marg justify-content-around">
            <div className="col-lg-8">
              <div className="md-mb80">
                <div className="text-center">
                  <p>Error loading articles. Please try again later.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-main section-padding">
      <div className="container">
        <div className="row lg-marg justify-content-around">
          <div className="col-lg-8">
            <div className="md-mb80">
              {articles && articles.length > 0 ? (
                articles.map((article, index) => (
                  <div key={article.id} className={`item ${index < articles.length - 1 ? 'mb-80' : ''}`}>
                    <div className="img">
                      <img
                        src={article.cover.url}
                        alt={article.title || 'Blog post'}
                      />
                    </div>
                    <div className="content">
                      {/* <div className="d-flex align-items-center mb-15">
                        <div className="post-date">
                          {formatDate(article.publishedAt || article.createdAt)}
                        </div>
                        <div className="commt opacity-7 fz-13">
                          <span className="ti-comment-alt mr-10"></span>0 Comments
                        </div>
                      </div> */}
                      <h3 className="mb-15">
                        <Link href={`/blog-details?slug=${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p>
                        {article.description || extractTextFromBlocks(article.blocks, 150)}
                      </p>
                      <Link
                        href={`/blog-details?slug=${article.slug}`}
                        className="d-flex align-items-center main-color mt-40"
                      >
                        <span className="text mr-15">Read More</span>
                        <span className="ti-arrow-top-right"></span>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center">
                  <p>No articles found.</p>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              {/* <div className="widget">
                <h6 className="title-widget">Search Here</h6>
                <div className="search-box">
                  <input type="text" name="search-post" placeholder="Search" />
                  <span className="icon pe-7s-search"></span>
                </div>
              </div> */}
              <BlogCategories />
              <SidebarLatestPosts />

              {/* <div className="widget tags">
                <h6 className="title-widget">Tags</h6>
                <div>
                  <a href="/blog-grid-sidebar">Creative</a>
                  <a href="/blog-grid-sidebar">Design</a>
                  <a href="/blog-grid-sidebar">Dark & Light</a>
                  <a href="/blog-grid-sidebar">Minimal</a>
                  <a href="/blog-grid-sidebar">Infolio</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
