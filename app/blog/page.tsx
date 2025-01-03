import BlogCard from '@/components/Card';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { client } from '@/sanity/lib/client';
import React from 'react';

export const revalidate = 10;

type BlogPost = {
  description: string;
  title: string;
  image: string;
  slug: string;
};

async function Blog() {
  const query = `*[_type == "blog"]{
    description, title, image,
    "slug": slug.current
  }`;

  const posts: BlogPost[] = await client.fetch(query);

  return (
    <div>
      <Navbar />

      <h1 className="text-center font-bold font-serif uppercase mt-8 text-2xl sm:text-1xl md:text-2xl lg:text-3xl">
        Unveiling the Beauty of Flowers
      </h1>
      <p className="text-center font-medium font-serif mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
        From gardening tips to floral arrangements, explore the endless beauty of flowers
      </p>

      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
