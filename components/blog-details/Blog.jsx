/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BlocksRenderer, formatDate } from '@/lib/richTextRenderer';
import BlogCategories from '@/app/blog/components/BlogCategories';
import SidebarLatestPosts from '@/app/blog/components/SidebarLatestPosts';

function Blog({ article }) {
  if (!article) {
    return (
      <section className="blog section-padding">
        <div className="container">
          <div className="row xlg-marg">
            <div className="col-lg-8">
              <div className="main-post">
                <div className="text-center">
                  <h3>Article not found</h3>
                  <p>The requested article could not be found.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="row xlg-marg">
          <div className="col-lg-8">
            <div className="main-post">
              <div className="item pb-60">
                <article>
                  <div className="article-meta mb-30">
                    <div className="d-flex align-items-center">
                      <div className="post-date">
                        {formatDate(article.publishedAt || article.createdAt)}
                      </div>
                    </div>
                  </div>

                  <h1 className="article-title mb-30">{article.title}</h1>

                  {article.description && (
                    <div className="article-description mb-30">
                      <p className="lead">{article.description}</p>
                    </div>
                  )}

                  <div className="article-content">
                    {article.blocks && article.blocks.length > 0 && (
                      article.blocks.map((block, index) => {
                        if (block.__component === "shared.rich-text" && block.body) {
                          return (
                            <div key={index} className="rich-text-content">
                              <BlocksRenderer content={block.body} />
                            </div>
                          );
                        }
                        return null;
                      })
                    )}
                  </div>
                </article>
              </div>


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

export default Blog;
