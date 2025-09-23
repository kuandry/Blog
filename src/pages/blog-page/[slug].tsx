import { useRouter } from 'next/router';
import { allPosts } from 'contentlayer/generated';
import { PostPage as Post } from '@/templates/blog';

export default function BlogPostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return <Post post={post} />;
}
