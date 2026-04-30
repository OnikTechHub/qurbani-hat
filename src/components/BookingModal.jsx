import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const BookingModal = ({ animalName, formData, setFormData, handleBookingSubmit }) => {
    return (
        <dialog id="booking_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box p-8 rounded-[32px] border border-orange-100">
                <h3 className="font-black text-2xl text-gray-800 mb-6">Book {animalName}</h3>
                
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                    
                    {/* Full Name */}
                    <div className="form-control">
                        <label className="label-text font-bold text-gray-600 mb-2">Full Name</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400"><FaUser/></span>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                className="input input-bordered w-full pl-10 focus:outline-orange-600" 
                                required 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label-text font-bold text-gray-600 mb-2">Email Address</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400"><FaEnvelope/></span>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="input input-bordered w-full pl-10 focus:outline-orange-600" 
                                required 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="form-control">
                        <label className="label-text font-bold text-gray-600 mb-2">Phone Number</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400"><FaPhone/></span>
                            <input 
                                type="tel" 
                                placeholder="Enter your Phone Number" 
                                className="input input-bordered w-full pl-10 focus:outline-orange-600" 
                                required 
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="form-control">
                        <label className="label-text font-bold text-gray-600 mb-2">Delivery Address</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 top-3 text-gray-400"><FaMapMarkerAlt/></span>
                            <textarea 
                                placeholder="Your full address" 
                                className="textarea textarea-bordered w-full pl-10 focus:outline-orange-600" 
                                required 
                                value={formData.address}
                                onChange={(e) => setFormData({...formData, address: e.target.value})}
                            ></textarea>
                        </div>
                    </div>

                    <div className="modal-action">
                        <button type="submit" className="btn bg-orange-600 hover:bg-orange-700 text-white w-full border-none shadow-lg">Confirm Booking</button>
                    </div>
                </form>

                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-500">✕</button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop bg-black/40 backdrop-blur-sm">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default BookingModal;