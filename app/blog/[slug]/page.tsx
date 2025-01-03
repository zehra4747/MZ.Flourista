import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Navbar from "@/components/Navbar";
import {PortableText} from '@portabletext/react'
import Footer from "@/components/Footer";

export const revalidate = 10;


export default async function page({ params }: { params: { slug: string } }) {

    const query = `*[_type == "blog" && slug.current == "${params.slug}"]{title, description, image, content}[0]`;
    const blog = await client.fetch(query);

    //console.log(blog);
    return (
        <div>
            <Navbar/>
            <h1 className="text-xl mt-8 font-serif mb-4 xs:text-3xl text-center lg:text-5xl font-bold text-black">{blog.title}</h1>
          <div  className=" justify-center items-center flex">  
            <Image
                src={urlForImage(blog.image)}
                width={500}
                height={500}
                alt="images"
                className="rounded"
            />
            </div>
            <div>
                <h2 className="text-xl xs:text-2xl font-serif ml-2 mr-2 md:text-3xl font-bold uppercase">Description</h2>
                <p className="text-base md:text-xl font-serif mb-8 ml-2 mr-2 leading-relaxed text-justify text-black ">{blog.description}</p>
            </div>

            <div>
                <section className="text-base md:text-xl font-serif ml-2 mr-2 leading-normal text-justify text-black">
                <PortableText
  value={blog.content}

/>
                </section>
            </div>

            <Footer/>
        </div>
    );
}
