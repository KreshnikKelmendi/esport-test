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
        <Link
          href="/blog"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
        >
          Return to Blog
        </Link>
      </div>
    </div>
  );

  // Check if content contains a list of countries and flags exist
  const hasCountryList = post.content.some(para => para.startsWith("Here are the qualified nations:"));
  const showFlags = hasCountryList && post.flags && post.flags.length > 0;
  
  // Find the index where country list starts
  const countryListIndex = post.content.findIndex(para => para.startsWith("Here are the qualified nations:"));
  
  // Get countries (assuming they start after "Here are the qualified nations:")
  const countries = countryListIndex >= 0 ? 
    post.content.slice(countryListIndex + 1).filter(para => para.trim().length > 0 && !para.includes(":")) : 
    [];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Article Container */}
        <article className="max-w-5xl 2xl:max-w-7xl mx-auto px-4 py-16">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-4 py-2 text-xs font-britanica rounded-full bg-gradient-to-r ${post.accentColor} text-white shadow-md`}>
                {post.category}
              </span>
              <time className="text-sm text-gray-500 font-britanica-regular">{post.date}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-britanica mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#050219] to-[#3703FF]">
              {post.title}
            </h1>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-12 shadow-xl">
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
            {post.content.map((paragraph, index) => {
              // Skip rendering countries as regular paragraphs if we're showing flags
              if (showFlags && index > countryListIndex && countries.includes(paragraph)) {
                return null;
              }
              
              return (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed font-britanica-regular">
                  {paragraph}
                </p>
              );
            })}

            {/* Display countries with flags if available */}
            {showFlags && (
              <div className="my-12">
                <h3 className="text-2xl font-britanica mb-6">Qualified Nations</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {countries.map((country, idx) => (
                    <div key={idx} className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-16 h-12 mr-4 overflow-hidden rounded-md shadow-sm">
                        <Image 
                          src={post.flags?.[idx] || ''} 
                          alt={`${country} flag`}
                          width={64}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="font-britanica">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center font-britanica gap-2 px-6 py-3 text-[#050219] rounded-lg hover:shadow-lg transition-all"
            >
              <BiSolidRightArrowSquare className="text-xl" />
              Back to all posts
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
                  <article key={relatedPost.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                    <Link href={`/blog/${relatedPost.id}`}>
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 text-xs font-britanica rounded-full bg-gradient-to-r from-[#3703FF] to-[#5E65EF] text-white mb-3">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-xl text-[#050219] font-britanica mt-1 mb-2 group-hover:text-[#3703FF] transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-britanica">{relatedPost.date}</p>
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