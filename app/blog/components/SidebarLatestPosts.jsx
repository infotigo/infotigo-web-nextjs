'use client';
/* eslint-disable @next/next/no-img-element */
import useArticles from '@/hooks/useArticles';
import { formatDate } from '@/lib/richTextRenderer';

const SidebarLatestPosts = () => {
    const { articles, loading, error } = useArticles(1, 5);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className="widget last-post-thum">
            <h6 className="title-widget">latest Posts</h6>
            {articles?.map((article) => (
                <div key={article.id} className="item d-flex align-items-center">
                    <div>
                        <div className="img">
                            <a href={`/blog-details?slug=${article.slug}`}>
                                <img src={article.cover.url} alt="article cover" />
                                <span className="date">
                                    <span>
                                        {formatDate(article.publishedAt || article.createdAt)}
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="cont">
                        <span className="tag">
                            <a href={`/category/${article.category.slug}`}>{article.category.name}</a>
                        </span>
                        <h6>
                            <a href={`/blog-details?slug=${article.slug}`}>
                                {article.title}
                            </a>
                        </h6>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SidebarLatestPosts;