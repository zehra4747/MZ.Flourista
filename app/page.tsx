
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  

  return (
    
    <div className="flex min-h-screen flex-col"
    >
      <Navbar />
     

      
      <div className="relative flex items-center justify-center mt-4 mb-20">
 
  <Image 
    src="/s8e43do9.png" 
    alt="Background" 
    width={1036} 
    height={414}  
    className="object-cover h-[414px] w-[1036px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[600px]"
  />
  
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 lg:px-16">
    <h1 className="text-white font-bold uppercase italic font-serif bg-black/40 py-2 px-4 rounded sm:py-3 sm:px-6 sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
      Bloom with Beauty: Your Flower Guide
    </h1>
    <p className="font-serif text-white bg-black/40 mt-4 py-2 px-4 rounded text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl lg:ml-40 lg:mr-40 leading-relaxed sm:py-3 sm:px-6">

Welcome to our floral haven, where the beauty of flowers takes center stage. Whether you&apos;re a gardening enthusiast or looking for floral arrangement inspiration, you&apos;ll find tips, stories, and creativity here. Let&apos;s celebrate the charm of blooms and add more color to the world.
    </p>
  </div>
  

</div>

<Showcase/>

<div className="container mx-auto p-5">
  <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {/* Card 1 */}
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <Image
      width={400}
      height={580}
        src="/0ed0dd085583327ea0e1ca6b5f36dd0e.jpg"
        alt="Placeholder"
        className="w-full h-58 object-cover"
      />
      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Discover Nature&apos;s Elegance</h2>
        <p className="text-gray-600 text-sm mt-2">
        Uncover the unique charm of each bloom with our carefully curated guide. Learn how every flower tells its own story, perfect for any occasion.
        </p>
        
      </div>
    </div>

    {/* Card 2 */}
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <Image
      width={400}
      height={580}
        src="/vilambara-idaiveli-capcut-template_000001.jpg"
        alt="Placeholder"
        className="w-full h-58 object-cover"
      />
      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Cultivate Your Green Haven</h2>
        <p className="text-gray-600 text-sm mt-2 mb-4">
        Master the art of gardening with practical tips and expert advice. From planting basics to seasonal care, grow your dream garden effortlessly
        </p>
       
      </div>
    </div>

    {/* Card 3 */}
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <Image
      width={400}
      height={580}
        src="/OIP (5).jpeg"
        alt="Placeholder"
        className="w-full h-68 object-cover"
      />
      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Art in Every Bloom</h2>
        <p className="text-gray-600 text-sm mt-2">
        Transform flowers into stunning masterpieces with our expert arrangement tips. Discover techniques to create beauty for every occasion
        </p>
     
      </div>
</div>
  </div>
</div>
  

      <div className="mt-20 text-center">
  <Link href="/blog">
    <button className="px-14 py-4 text-white font-semibold rounded-full bg-[#735751] hover:bg-[#a78a7f] transition duration-200">
      Explore latest
    </button>
  </Link>
</div>


<Footer/>


    </div>
  );
}
