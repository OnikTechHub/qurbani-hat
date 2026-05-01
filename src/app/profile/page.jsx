"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    if (!user) return <div className="text-center py-10 loading-bars loading-xl">Loading...</div>;

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-2xl shadow-md border text-center">
            <h2 className="text-2xl font-bold mb-6 text-green-700">My Profile</h2>
            <div className="avatar mb-4">
                <div className="w-24 rounded-full ring ring-green-500 ring-offset-2">
                    <img src={user.image || "https://img.icons8.com/officel/80/user.png"} alt="profile" />
                </div>
            </div>
            <h3 className="text-xl font-bold">{user.name}</h3>
            <p className="text-gray-500 mb-6">{user.email}</p>

           
            <Link href="/profile/update" className="btn bg-green-600 text-white w-full hover:bg-green-700">
                Update Information
            </Link>
            <br />
            <Link href="/" className="mt-2 btn bg-orange-600 text-white w-full hover:bg-orange-700">
                Home
            </Link>
            
        </div>
    );
};

export default ProfilePage;