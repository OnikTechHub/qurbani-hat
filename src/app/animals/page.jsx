"use client";
import { useEffect, useState } from 'react';
import AnimalCard from '@/components/AnimalCard';
import { HashLoader, RingLoader } from 'react-spinners'; 

const AllAnimalsPage = () => {
    const [animals, setAnimals] = useState([]);
    const [displayAnimals, setDisplayAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState("");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch('/animals.json')
            .then(res => res.json())
            .then(data => {
                setAnimals(data);
                setDisplayAnimals(data);
                setLoading(false);
            });
    }, []);

    
    const handleFilterAndSort = (searchVal, sortVal) => {
        setLoading(true);

        setTimeout(() => {
            let filtered = animals.filter(animal => 
                animal.name.toLowerCase().includes(searchVal.toLowerCase()) ||
                animal.category.toLowerCase().includes(searchVal.toLowerCase())
            );

            if (sortVal === "low-to-high") {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortVal === "high-to-low") {
                filtered.sort((a, b) => b.price - a.price);
            }

            setDisplayAnimals(filtered);
            setLoading(false);
        }, 600);
    };

  
    const handleSearchChange = (e) => {
        const val = e.target.value;
        setSearchText(val);
        handleFilterAndSort(val, sortOrder);
    };

   
    const handleSortChange = (e) => {
        const val = e.target.value;
        setSortOrder(val);
        handleFilterAndSort(searchText, val);
    };

    return (
        <div className="container mx-auto py-10 px-4 min-h-screen">

            {/* Filter & Search Header */}

            <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                
                <div className="w-full lg:w-1/2">
                
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Find Your Best Animal</h1>
               
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search by name or category " 
                            className="input input-bordered w-full pl-10 border-orange-400 focus:outline-orange-600"
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

               {/* Sort by Price */}

                <div className="form-control w-full lg:w-1/4">
                    <label className="label">
                        <span className="label-text font-semibold">Sort by Price</span>
                    </label>
                    <select 
                        className="select select-bordered border-orange-400 focus:outline-orange-600 w-full"
                        onChange={handleSortChange}
                        value={sortOrder}
                    >
                        <option value="">Default Order</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Loading Spinner */}

            {loading ? (
                <div className="flex flex-col items-center justify-center min-h-[50vh]">
                    <HashLoader color="#ea580c" size={80} />
                    <p className="mt-6 text-orange-600 font-medium animate-pulse">
            
                        Searching our farmhouse...
                    </p>
                </div>
            ) : (
                <div>
                    {displayAnimals.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {displayAnimals.map(animal => (
                                <AnimalCard key={animal.id} animal={animal} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            
                            <h3 className="text-2xl font-bold text-gray-700">No matching animals found!</h3>
                            <p className="text-gray-500">Try searching for something else like "Cow" or "Goat".</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllAnimalsPage;