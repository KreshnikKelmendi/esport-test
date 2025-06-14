"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Link from "next/link"; // Import Link from next/link
import { BlogPost, blogPosts } from "../components/data-blog/blog";

const BlogHome = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  const CustomArrow = ({
    onClick,
    direction,
  }: {
    onClick?: () => void;
    direction: "left" | "right";
  }) => {
    return (
      <button
        onClick={onClick}
        className={`absolute cursor-pointer ${direction === "left" ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#FFB600] to-[#5E65EF] hover:bg-opacity-70 rounded-full p-2 transition-all duration-300 hidden lg:block`}
        aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="min-h-screen mx-auto px-4 lg:px-10 py-16 relative bg-gradient-to-r from-[#0a0829] to-[#050219]">
      {/* Content Container */}
      <div className="relative mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-6">
            <span className="text-[11px] lg:text-sm font-britanica tracking-widest text-[#FFB600]">
              LATEST UPDATES
            </span>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFB600] to-transparent mt-2"></div>
          </div>
          <p className="text-[3vh] md:text-5xl lg:text-5xl font-britanica mb-4 text-white">
            CHAMPIONSHIP NEWS
          </p>
          <p className="text-lg md:text-xl font-britanica-regular max-w-3xl mx-auto text-white">
            The latest news, highlights, and insights from Europe&rsquo;s
            premier esports competition
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="px-2"
            arrows={true}
            customLeftArrow={<CustomArrow direction="left" />}
            customRightArrow={<CustomArrow direction="right" />}
            renderButtonGroupOutside={false}
            removeArrowOnDeviceType={["mobile", "tablet"]}
            showDots={true}
          >
            {blogPosts?.map((post: BlogPost) => (
              <div key={post.id} className="overflow-hidden h-full">
                {/* Image Container with Link */}
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-64 lg:h-80 2xl:h-[45vh] w-full overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover rounded-2xl"
                      quality={90}
                    />
                  </div>
                </Link>
                {/* Title with Link */}
                <Link href={`/blog/${post.id}`}>
                  <div className="p-4">
                    <h3 className="text-white text-lg font-britanica hover:text-[#3703FF] transition-all duration-300">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link href="/blog" className="inline-block px-8 py-3 md:px-10 md:py-4 text-lg font-britanica outline text-white rounded-lg bg-gradient-to-r from-blue-700 to-yellow-500 bg-[length:0%_100%] hover:bg-[length:100%_100%] bg-no-repeat transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 hover:text-white">
            View All Articles
            <span className="ml-2 inline-block animate-bounce">↓</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
