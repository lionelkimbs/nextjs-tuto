import Link from 'next/link';
import React from 'react';

const Article = ({ article, }) => {
    return (
        <Link href='/articles/[id]' as={`/articles/${article.id}`}>
            <div className="article">
                <h3>{article.title} ➡️ </h3>
                <p>{article.body}</p>
            </div>
        </Link>
    );
};

export default Article;