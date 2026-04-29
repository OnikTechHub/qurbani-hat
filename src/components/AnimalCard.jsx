import Link from 'next/link';

const AnimalCard = ({ animal }) => {
    return (

        <div className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">

            <figure className="px-4 pt-4">
                <img src={animal.image} alt={animal.name} className="rounded-xl h-48 w-full object-cover" />
            </figure>

            <div className="card-body">

                <div className="flex justify-between items-start">
                    <h2 className="card-title text-gray-800">{animal.name}</h2>
                    <div className="badge badge-secondary bg-orange-100 text-orange-600 border-none">{animal.category}</div>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2">{animal.description}</p>

                <div className="flex flex-col gap-1 my-2">

                    <span className="font-bold text-xl text-orange-600 flex text-center items-center gap-1 "><div className='font-bold text-3xl'>৳</div> {animal.price.toLocaleString()}</span>

                    <span className="text-sm text-gray-500">Weight: {animal.weight}kg | Age: {animal.age}yrs</span>
                </div>

                <div className="card-actions mt-2">

                    <Link href={`/details/${animal.id}`} className="btn btn-primary bg-orange-600 hover:bg-orange-700 border-none text-white w-full">
                        View Details
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;