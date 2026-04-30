"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {  RiseLoader } from 'react-spinners';
import { FaWeightHanging, FaCalendarAlt, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const AnimalDetails = () => {
    const { id } = useParams();
    const router = useRouter();
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('/animals.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(item => item.id == id);
                if (found) {
                    setAnimal(found);
                } else {
                    router.push('/not-found');
                }
                setLoading(false);
            });
    }, [id, router]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <RiseLoader color="#ea580c" />
        </div>
    );

    return (
        <div className="container mx-auto py-12 px-4 min-h-screen">
            

            <div className="flex flex-col lg:flex-row gap-12 bg-white p-4 md:p-10 shadow-xl rounded-[32px] border border-gray-100">

                {/* Left Side Badge */}

                <div className="flex-1 relative">
                    <img 
                        src={animal.image} 
                        alt={animal.name} 
                        className="w-full h-[400px] md:h-[550px] object-cover rounded-3xl shadow-md transition-transform hover:scale-[1.01] duration-300"
                    />
                    <div className="absolute top-6 left-6">
                        <span className="badge badge-lg bg-orange-600 text-white border-none p-4 font-bold shadow-lg">
                            {animal.category}
                        </span>
                    </div>
                </div>

                {/* Right Side Detailed  */}
                <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">{animal.name}</h1>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            {animal.description}
                        </p>

                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-6 bg-gray-50 p-8 rounded-2xl mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white rounded-xl shadow-sm text-orange-600"><FaTag /></div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Price</p>
                                    <p className="text-xl font-bold text-orange-600">৳{animal.price.toLocaleString()}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white rounded-xl shadow-sm text-orange-600"><FaWeightHanging /></div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Weight</p>
                                    <p className="text-xl font-bold text-gray-700">{animal.weight} kg</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white rounded-xl shadow-sm text-orange-600"><FaCalendarAlt /></div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Age</p>
                                    <p className="text-xl font-bold text-gray-700">{animal.age} Years</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white rounded-xl shadow-sm text-orange-600"><FaMapMarkerAlt /></div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Origin</p>
                                    <p className="text-xl font-bold text-gray-700">Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="btn btn-lg bg-orange-600 hover:bg-orange-700 text-white border-none flex-[2] shadow-xl shadow-orange-200">
                            Book This Animal
                        </button>
                        <Link href="/animals" className="btn btn-lg btn-outline border-gray-300 flex-1 hover:bg-gray-100 hover:text-gray-800">
                            Back to List
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetails;