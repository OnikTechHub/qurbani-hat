"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    
    // Fetch user session data
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const isActive = (path) => pathname === path;

    const navLinks = (
        <>
            <li>
                <Link
                    href="/"
                    className={`font-medium ${isActive('/') ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'}`}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href="/animals"
                    className={`font-medium ${isActive('/animals') ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600'}`}
                >
                    All Animals
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-2 md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-2xl bg-white rounded-box w-52 border border-gray-100">
                        {navLinks}
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl md:text-2xl font-bold gap-0 px-1">
                    <span className="text-orange-600">Qurbani</span>Hat
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-1 md:gap-2">
                {user ? (
                    <div className="flex items-center gap-2 md:gap-3">

                        {/*  User Profile Image  */}
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2">
                                <img 
                                    src={user.image || "https://img.icons8.com/officel/80/user.png"} 
                                    alt="profile" 
                                />
                            </div>
                        </div>

                        {/*  User Name and Email */}
                        <div className="flex flex-col items-start">
                            <span className="text-sm font-bold text-gray-800 leading-none">{user.name}</span>
                            <span className="text-[10px] text-gray-500">{user.email}</span>
                        </div>

                        {/* Profile Button  */}
                        
                        <Link 
                            href="/profile" 
                            className="btn btn-xs sm:btn-sm btn-outline btn-neutral hidden sm:flex"
                        >
                            Profile
                        </Link>

                        {/*  Logout Button  */}

                        <button 
                            onClick={async () => await authClient.signOut()}
                            className="btn btn-xs sm:btn-sm btn-outline btn-error hidden sm:flex"
                        >
                            Logout
                        </button>

                        {/* Dropdown for Mobile Users */}
                        <div className="dropdown dropdown-end sm:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-xs">More</div>
                            <ul tabIndex={0} className="mt-3 z-[100] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-40 border">
                                <li><Link href="/profile">Profile</Link></li>
                                <li><button onClick={() => authClient.signOut()}>Logout</button></li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-1 md:gap-2">
                        <Link
                            href="/login"
                            className={`btn btn-xs sm:btn-sm md:btn-md ${isActive('/login') ? 'btn-neutral' : 'btn-ghost'}`}
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className={`btn btn-xs sm:btn-sm md:btn-md ${isActive('/register') ? 'btn-neutral' : 'btn-ghost'}`}
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;