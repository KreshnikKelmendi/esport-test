'use client';

import { blogPosts } from '@/app/components/data-blog/blog';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import { BiSolidRightArrowSquare } from 'react-icons/bi';

export default function SingleBlogPost() {
  const { id } = useParams();
  const post = blogPosts?.find(post => post.id === id);

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center py-20 max-w-2xl px-4">
        <h1 className="text-4xl font-bold font-britanica-regular mb-6">404 - Post Not Found</h1>
        <p className="text-lg mb-8">The post you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/blog"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
        >
          Return to Blog
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Article Container */}
        <article className="max-w-5xl 2xl:max-w-7xl mx-auto px-4 py-16">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-2 text-xs font-britanica rounded-full bg-gradient-to-r ${post.accentColor} text-white`}>
                {post.category}
              </span>
              <time className="text-sm text-gray-500 font-britanica-regular">{post.date}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-britanica mb-6 leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-12">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed font-britanica-regular">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center font-britanica gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              <BiSolidRightArrowSquare />
              Go to all posts
            </Link>
          </div>

          {/* Related Posts */}
          <section className="mt-24 border-t border-[#FFB600] pt-12">
            <h2 className="text-2xl font-britanica mb-8">More from our blog</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== id)
                .slice(0, 2)
                .map(relatedPost => (
                  <article key={relatedPost.id} className="group">
                    <Link href={`/blog/${relatedPost.id}`}>
                      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-britanica text-[#3703FF]">{relatedPost.category}</span>
                        <h3 className="text-xl text-[#050219] font-britanica-regular mt-1 mb-2 group-hover:text-[#FFB600] transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-[#5E65EF] font-britanica">{relatedPost.date}</p>
                      </div>
                    </Link>
                  </article>
                ))}
            </div>
          </section>
        </article>
      </div>
      <Footer />
    </>
  );
}