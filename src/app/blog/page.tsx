'use client';

import { Suspense } from 'react';
import { BlogList } from '@/templates/blog';
import { allPosts } from 'contentlayer/generated';

export default function BlogListPage() {
    const sortedPosts = allPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <BlogList posts={sortedPosts} />
        </Suspense>
    );
}