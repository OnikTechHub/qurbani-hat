"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
    const { data: session } = authClient.useSession();
    const [name, setName] = useState(session?.user?.name || "");
    const [image, setImage] = useState(session?.user?.image || "");
    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();
        
        const { data, error } = await authClient.updateUser({
            name: name,
            image: image,
        });

        if (error) {
            toast.error(error.message || "Update failed!");
        } else {
            toast.success("Information Updated Successfully!");
            router.push("/profile"); 
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-2xl shadow-lg border">
            <h2 className="text-xl font-bold mb-6 text-green-700">Update Information</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
                <div className="form-control">
                    <label className="label font-semibold">Profile Image URL</label>
                    <input 
                        type="text" 
                        value={image} 
                        onChange={(e) => setImage(e.target.value)} 
                        placeholder="Paste image URL here"
                        className="input input-bordered w-full" 
                    />
                </div>
                <div className="form-control">
                    <label className="label font-semibold">Full Name</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your name"
                        className="input input-bordered w-full" 
                    />
                </div>
                <button type="submit" className="btn bg-green-600 text-white w-full mt-4 hover:bg-green-700">
                    An Update Information Button
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;