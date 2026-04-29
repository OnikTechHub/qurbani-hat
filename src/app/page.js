import Link from 'next/link';

export default function Home() {
  return (
    <main>
      
      <div className="hero min-h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/kg7s3GfV/image.webp)'}}>
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md md:max-w-2xl">
            <h1 className="mb-5 text-4xl md:text-6xl font-bold leading-tight">
              Find Your Perfect <span className="text-orange-500">Qurbani Animal</span> at Home
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Explore the best collection of healthy cows and goats. We ensure direct farm-to-home delivery with the best prices and guaranteed health.
            </p>
            <Link href="/animals" className="btn btn-primary bg-orange-600 hover:bg-orange-700 border-none text-white px-8 rounded-full text-lg shadow-lg transition-all hover:scale-105">
              Browse All Animals
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Animals Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Animals</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Pick from our hand-picked selection of top-quality livestock</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="text-center col-span-full py-10">
               <span className="loading loading-bars loading-xl text-orange-600"></span>
               <p className="mt-2 text-gray-500 font-medium">Loading amazing animals for you...</p>
            </div>
        </div>
      </section>
    </main>
  );
}