"use client";
import Link from 'next/link';
const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">

            <h1 className="text-9xl font-extrabold text-orange-600 tracking-widest">404</h1>

            <div className="mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                    The page you are looking for might have been moved, deleted, or never existed in our livestock market.
                </p>


                <Link
                    href="/"
                    className="btn bg-orange-600 hover:bg-orange-700 text-white border-none px-8 rounded-full shadow-lg transition-all hover:scale-105"
                >
                    Back to Home
                </Link>
            </div>

        </div>
    );
};

export default NotFound;