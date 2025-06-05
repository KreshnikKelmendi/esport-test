'use client'
import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost, blogPosts } from '../components/data-blog/blog';

const GridBlog = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'portrait'>('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Calculate total pages
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Reset to first page if view mode changes
    useEffect(() => {
        setCurrentPage(1);
    }, [viewMode]);

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 ">
            <div className="mx-auto flex flex-col lg:flex-row gap-8">
                {/* Main Content (75% width on large screens) */}
                <div className="lg:w-[75%]">
                    <div className="mb-16">
                        <span className="inline-block px-3 py-1 text-[12px] font-britanica-regular tracking-wider text-white uppercase rounded-full bg-[#050219] mb-4">
                            Latest news
                        </span>
                        <h2 className="text-4xl font-britanica text-black mb-4">
                            Championship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB600] to-[#3703FF]">News</span>
                        </h2>
                        <p className="text-lg text-black max-w-3xl font-britanica-regular">
                            The latest news, highlights, and insights from Europe&apos;s premier esports competition
                        </p>


                        {/* View mode toggle */}
                        <div className="hidden lg:flex justify-end mt-6">
                            <div className="inline-flex font-britanica-regular bg-gray-900 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`px-4 py-2 rounded-md flex items-center ${viewMode === 'grid' ? 'bg-gray-800 text-blue-400' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                           
                                </button>
                                <button
                                    onClick={() => setViewMode('portrait')}
                                    className={`px-4 py-2 rounded-md flex items-center ${viewMode === 'portrait' ? 'bg-gray-800 text-blue-400' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                 
                                </button>
                            </div>
                        </div>
                    </div>

                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentPosts.map((post: BlogPost) => (
                                <article key={post.id} className="group relative overflow-hidden rounded-2xl transition-all duration-300 ">
                                    {/* Image with gradient overlay */}
                                    <div className="relative lg:h-80 2xl:h-96 overflow-hidden rounded-t-2xl font-britanica-regular">

                                        <Image
                                            src={post.imageUrl}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            width={'500'}
                                            height={'300'}
                                        />

                                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050219] opacity-100`}></div>

                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 p-5 bg-[#050219] backdrop-blur-sm rounded-b-2xl">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-xs text-white font-britanica">{post.date}</span>
                                        </div>

                                        <h3 className="text-base font-britanica text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                                            <Link href={`/blog/${post.id}`}>
                                                {post.title}
                                            </Link>
                                        </h3>

                                        <p className="text-gray-200 font-britanica-regular text-[12px] mb-4 line-clamp-2">
                                            {post.content[0]}
                                        </p>

                                        {/* Author/CTA section */}
                                        <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                                            <Link href={`/blog/${post.id}`} className="text-white hover:text-[#4e5bfc] text-sm font-britanica-regular flex items-center transition-colors">
                                                Read more
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Hover effect - accent bar */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${post.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {currentPosts.map((post: BlogPost) => (
                                <article key={post.id} className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 bg-[#050219]  to-[#4e5bfc] backdrop-blur-sm">
                                    <div className="flex flex-col md:flex-row justify-center items-center">
                                        {/* Image with gradient overlay */}
                                        <div className="relative md:w-1/3 lg:h-64 2xl:h-80 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                                            <Image
                                                src={post.imageUrl}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                width={'500'}
                                                height={'300'}
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90`}></div>

                                            {/* Floating category badge */}
                                            <div className="absolute top-4 left-4 z-10 flex items-center">
                                                <span className={`px-3 py-1 font-britanica text-xs rounded-full ${post.category === 'CS2' ? 'bg-blue-900/80 text-blue-300' : post.category === 'Dota 2' ? 'bg-[#FFB600] text-black' : 'bg-[#FFB600] text-black'}`}>
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 p-5 md:w-2/3">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-xs font-britanica text-gray-400">{post.date}</span>
                                            </div>

                                            <h3 className="text-xl font-britanica text-white mb-3 group-hover:text-blue-400 transition-colors">
                                                <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                            </h3>

                                            <p className="text-sm text-gray-200 font-britanica-regular mb-4 line-clamp-2">
                                                {post.content[0]}
                                            </p>

                                            {/* Author/CTA section */}
                                            <div className="flex items-center justify-between pt-3 border-t border-gray-800">

                                                <Link href={`/blog/${post.id}`} className="text-white font-britanica hover:text-blue-300 text-sm flex items-center transition-colors">
                                                    Read More
                                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover effect - accent bar */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${post.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex justify-center">
                            <nav className="flex items-center space-x-1">
                                {/* Previous button */}
                                <button
                                    onClick={() => {
                                        if (currentPage > 1) paginate(currentPage - 1);
                                    }}
                                    disabled={currentPage === 1}
                                    className={`p-2 rounded-lg ${currentPage === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                {/* Page numbers */}
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => paginate(number)}
                                        className={`w-10 h-10 flex items-center font-britanica-regular text-[13px] justify-center rounded-lg ${currentPage === number ? 'bg-[#050219] font-britania text-white' : 'text-gray-500 hover:bg-gray-800 hover:text-white'}`}
                                    >
                                        {number}
                                    </button>
                                ))}

                                {/* Next button */}
                                <button
                                    onClick={() => {
                                        if (currentPage < totalPages) paginate(currentPage + 1);
                                    }}
                                    disabled={currentPage === totalPages}
                                    className={`p-2 rounded-lg ${currentPage === totalPages ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </nav>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:w-[25%] sticky top-6">
                    <div className="bg-[#050219] backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                        {/* Tournament Details Section */}
                        <h3 className="text-base font-britanica text-white mb-6 pb-4 border-b border-gray-800 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Tournament Details
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xs font-britanica text-white uppercase tracking-wider mb-2">VENUE</h4>
                                <p className="text-white font-britanica-regular">Pristina Olympic Stadium</p>
                            </div>

                            <div>
                                <h4 className="text-xs font-britanica text-white uppercase tracking-wider mb-2">DATE</h4>
                                <p className="text-white font-britanica-regular">July 09 – 13, 2025</p>
                            </div>

                            {/* <div>
                                <h4 className="text-xs font-britanica text-white uppercase tracking-wider mb-2">PRIZE POOL</h4>
                                <p className="text-white font-britanica-regular">$500,000</p>
                            </div> */}

                            <div className='font-britanica'>
                                <h4 className="text-xs text-white uppercase tracking-wider mb-2">TOURNAMENTS</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="inline-block px-2 py-1 mr-3 text-xs rounded bg-blue-900 text-white">CS2</span>
                                        <span className="text-white text-sm">Top 16 teams</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block px-2 py-1 mr-3 text-xs rounded bg-blue-900 text-white">Dota 2</span>
                                        <span className="text-white text-sm">Top 12 teams</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block px-2 py-1 mr-3 text-xs rounded bg-blue-900 text-white">CS2 Women</span>
                                        <span className="text-white text-sm">Top 8 teams</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Popular Posts Section */}
                        <h3 className="text-base font-britanica text-white mb-6 pb-4 border-b border-gray-800 flex items-center mt-6">
                            <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            Popular Posts
                        </h3>

                        <div className="space-y-4">
                            {blogPosts.slice(0, 3).map((post: BlogPost) => (
                                <a key={post.id} href="#" className="group flex items-start space-x-3 hover:bg-gray-800/50 p-2 rounded-lg transition-colors">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                                        <Image src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" width={'300'} height={'300'} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-britanica-regular text-white group-hover:text-blue-400 transition-colors">{post.title}</h4>
                                        <p className="text-[10px] font-britanica text-gray-400">{post.date}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridBlog;